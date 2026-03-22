/**
 * Google Apps Script - FotoLapse Form Handler
 * 
 * Hướng dẫn cài đặt:
 * 1. Mở Google Sheets của bạn
 * 2. Vào Extensions > Apps Script
 * 3. Xóa hết code mặc định, dán toàn bộ code này vào
 * 4. Lưu lại (Ctrl+S)
 * 5. Chạy lần đầu (chọn doGet > Run)
 * 6. Deploy > New deployment > Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 7. Copy URL web app và dán vào HTML form
 */

const SPREADSHEET_ID = '1MuzbmQKJ70IFMAr2rz22slPLfOOMeTf4869AzFiBT9c';

/**
 * Xử lý GET request - hiển thị trang thành công
 */
function doGet() {
  return HtmlService.createHtmlOutput(
    '<h1>✅ FotoLapse Form Handler đang hoạt động!</h1>' +
    '<p>Form đã được kết nối thành công.</p>'
  );
}

/**
 * Xử lý POST request - nhận dữ liệu từ form
 */
function doPost(e) {
  try {
    let data;
    
    // Kiểm tra loại dữ liệu
    if (e.postData && e.postData.contents) {
      const contents = e.postData.contents;
      // Nếu là JSON
      if (contents.trim().startsWith('{')) {
        data = JSON.parse(contents);
      } else {
        // Nếu là form data (URL encoded)
        data = parseFormData(contents);
      }
    } else {
      data = e.parameter;
    }
    
    const subject = data.subject;
    
    // Xác định sheet dựa trên subject
    let sheetName;
    let rowData;
    
    switch(subject) {
      case 'booking':
        sheetName = 'Đặt chỗ';
        rowData = [
          new Date(),                    // Timestamp
          data.name,                     // Họ tên
          data.phone,                    // Số điện thoại
          data.email,                    // Email
          data.booking_date,             // Ngày
          data.booking_time,             // Giờ
          data.booking_room,             // Phòng
          data.booking_people,           // Số người
          data.message                   // Nội dung
        ];
        break;
        
      case 'recruitment':
        sheetName = 'Tuyển dụng';
        rowData = [
          new Date(),                    // Timestamp
          data.name,                     // Họ tên
          data.phone,                    // Số điện thoại
          data.email,                    // Email
          data.recruitment_position,     // Vị trí ứng tuyển
          data.cv_url,                   // CV URL
          data.message                   // Nội dung
        ];
        break;
        
      case 'suggestion':
        sheetName = 'Đề xuất';
        rowData = [
          new Date(),                    // Timestamp
          data.name,                     // Họ tên
          data.phone,                    // Số điện thoại
          data.email,                    // Email
          data.message                   // Nội dung
        ];
        break;
        
      case 'complaint':
        sheetName = 'Khiếu nại';
        rowData = [
          new Date(),                    // Timestamp
          data.name,                     // Họ tên
          data.phone,                    // Số điện thoại
          data.email,                    // Email
          data.message                   // Nội dung
        ];
        break;
        
      default:
        throw new Error('Invalid subject: ' + subject);
    }
    
    // Ghi dữ liệu vào sheet
    writeToSheet(sheetName, rowData);
    
    // Trả về kết quả thành công
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Dữ liệu đã được lưu vào sheet: ' + sheetName
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Trả về lỗi
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Ghi dữ liệu vào Google Sheet
 */
function writeToSheet(sheetName, rowData) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet;
  
  try {
    sheet = spreadsheet.getSheetByName(sheetName);
  } catch (e) {
    // Nếu sheet chưa tồn tại, tạo mới
    sheet = spreadsheet.insertSheet(sheetName);
    
    // Tạo header tương ứng với từng loại
    const headers = getHeaders(sheetName);
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
  
  // Thêm dữ liệu mới vào hàng tiếp theo
  const lastRow = sheet.getLastRow();
  sheet.getRange(lastRow + 1, 1, 1, rowData.length).setValues([rowData]);
}

/**
 * Lấy header tương ứng với từng sheet
 */
function getHeaders(sheetName) {
  switch(sheetName) {
    case 'Đặt chỗ':
      return ['Timestamp', 'Họ tên', 'Số điện thoại', 'Email', 'Ngày', 'Giờ', 'Phòng', 'Số người', 'Nội dung'];
    case 'Tuyển dụng':
      return ['Timestamp', 'Họ tên', 'Số điện thoại', 'Email', 'Vị trí ứng tuyển', 'CV URL', 'Nội dung'];
    case 'Đề xuất':
      return ['Timestamp', 'Họ tên', 'Số điện thoại', 'Email', 'Nội dung'];
    case 'Khiếu nại':
      return ['Timestamp', 'Họ tên', 'Số điện thoại', 'Email', 'Nội dung'];
    default:
      return ['Timestamp', 'Data'];
  }
}

/**
 * Parse form data (URL encoded)
 */
function parseFormData(contents) {
  const params = contents.split('&');
  const data = {};
  
  for (let i = 0; i < params.length; i++) {
    const pair = params[i].split('=');
    const key = decodeURIComponent(pair[0]);
    const value = decodeURIComponent(pair[1] || '');
    data[key] = value;
  }
  
  return data;
}

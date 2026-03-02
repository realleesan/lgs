"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100">
      <Skeleton className="h-6 w-1/2 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-4" />
      <div className="flex gap-2">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
      </div>
    </div>
  );
}

export function BlogSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
      <Skeleton className="h-48 w-full" />
      <div className="p-6">
        <Skeleton className="h-6 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  );
}

export function PricingSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100">
      <Skeleton className="h-8 w-1/3 mb-2" />
      <Skeleton className="h-10 w-1/4 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-6" />
      <div className="space-y-3 mb-6">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>
      <Skeleton className="h-12 w-full rounded-full" />
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-4 w-32 mb-2" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
      ))}
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl">
        <Skeleton className="h-4 w-32 mb-4" />
        <Skeleton className="h-12 w-3/4 mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-5/6 mb-6" />
        <div className="flex gap-4">
          <Skeleton className="h-12 w-40 rounded-full" />
          <Skeleton className="h-12 w-40 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="w-12 h-12 border-4 border-[#356df1] border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p className="text-gray-500">Đang tải...</p>
      </div>
    </div>
  );
}

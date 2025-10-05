import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export const TestimonialSkeleton = () => (
  <Card className="border-2 border-muted animate-pulse">
    <CardHeader>
      <div className="w-8 h-8 bg-muted rounded mb-4" />
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-full" />
        <div className="h-4 bg-muted rounded w-5/6" />
        <div className="h-4 bg-muted rounded w-4/6" />
      </div>
    </CardHeader>
    <CardContent>
      <div className="h-5 bg-muted rounded w-2/3 mb-2" />
      <div className="h-4 bg-muted rounded w-1/2" />
    </CardContent>
  </Card>
);

export const CardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-lg p-8 animate-pulse">
    <div className="flex items-center mb-6">
      <div className="w-8 h-8 bg-muted rounded mr-3" />
      <div className="h-7 bg-muted rounded w-1/3" />
    </div>
    <div className="space-y-3">
      <div className="h-4 bg-muted rounded w-full" />
      <div className="h-4 bg-muted rounded w-5/6" />
      <div className="h-4 bg-muted rounded w-4/6" />
    </div>
  </div>
);

export const HeroSkeleton = () => (
  <div className="w-full h-[600px] bg-muted animate-pulse" />
);

export const BlogCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
    <div className="h-48 bg-muted" />
    <div className="p-6 space-y-4">
      <div className="h-4 bg-muted rounded w-1/4" />
      <div className="h-6 bg-muted rounded w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-full" />
        <div className="h-4 bg-muted rounded w-5/6" />
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="h-4 bg-muted rounded w-1/4" />
        <div className="h-4 bg-muted rounded w-1/5" />
      </div>
    </div>
  </div>
);

export const FormSkeleton = () => (
  <div className="space-y-4 animate-pulse">
    <div className="space-y-2">
      <div className="h-4 bg-muted rounded w-1/4" />
      <div className="h-10 bg-muted rounded w-full" />
    </div>
    <div className="space-y-2">
      <div className="h-4 bg-muted rounded w-1/4" />
      <div className="h-10 bg-muted rounded w-full" />
    </div>
    <div className="space-y-2">
      <div className="h-4 bg-muted rounded w-1/4" />
      <div className="h-32 bg-muted rounded w-full" />
    </div>
    <div className="h-10 bg-muted rounded w-1/3" />
  </div>
);

export const TableSkeleton = ({ rows = 5 }: { rows?: number }) => (
  <div className="w-full animate-pulse">
    <div className="h-12 bg-muted rounded mb-2" />
    {Array.from({ length: rows }).map((_, i) => (
      <div key={i} className="h-16 bg-muted rounded mb-2" />
    ))}
  </div>
);

export const PageSkeleton = () => (
  <div className="min-h-screen bg-background py-12 animate-pulse">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-12 bg-muted rounded w-2/3 mb-8" />
      <div className="space-y-4 mb-8">
        <div className="h-4 bg-muted rounded w-full" />
        <div className="h-4 bg-muted rounded w-5/6" />
        <div className="h-4 bg-muted rounded w-4/6" />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  </div>
);

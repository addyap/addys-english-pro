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

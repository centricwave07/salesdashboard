'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/lib/utils'

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      'relative h-4 w-full overflow-hidden rounded-full',
      className,
    )}
    {...props}
  >
    {props.children}
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

const ProgressIndicator = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Indicator>
>(({ className, style, ...props }, ref) => (
  <ProgressPrimitive.Indicator
    ref={ref}
    className={cn("h-full w-full flex-1 transition-all", className, )}
    // style={{ transform: `translateX(-${100 - (50 || 0)}%)` }}
  />
))
ProgressIndicator.displayName = ProgressPrimitive.Indicator.displayName

export { Progress, ProgressIndicator }

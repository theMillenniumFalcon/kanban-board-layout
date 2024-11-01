import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface ResponsiveControlProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const ResponsiveControl = forwardRef<
  HTMLDivElement,
  ResponsiveControlProps
>(({ className, ...args }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'responsive-control',
        'box-border mx-auto',
        'w-[1100px] max-2xl:w-[1200px] max-xl:w-[920px] max-lg:w-[680px] max-md:w-[440px] max-sm:w-[340px]',
        className,
      )}
      {...args}
    />
  );
});

ResponsiveControl.displayName = 'ResponsiveControl';

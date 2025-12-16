// Based from https://ui.indie-starter.dev/docs/header
'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { MobileHeader } from '@/components/mobile-header';
import { cn } from '@/lib/utils';

const headerVariants = cva('mx-auto', {
  variants: {
    variant: {
      default: 'max-w-7xl',
      centered:
        'max-w-4xl rounded-full mt-2 border shadow-lg dark:border-zinc-900 dark:bg-zinc-950/50 backdrop-blur bg-zinc-50',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface HeaderProps extends VariantProps<typeof headerVariants> {
  sticky?: boolean;
  /**
   * Items to be displayed on mobile
   */
  mobileItems: ({
    setIsOpen,
  }: {
    setIsOpen: (open: boolean) => void;
  }) => React.ReactNode;
  /**
   * Items to be displayed on desktop
   */
  desktopItems: React.ReactNode;
}

//======================================
export const Header = ({
  sticky,
  variant,
  mobileItems,
  desktopItems,
}: HeaderProps) => {
  return (
    <header
      className={cn(
        'w-full flex flex-col justify-center z-999',
        sticky && variant == 'centered' && 'md:sticky top-3',
        sticky && variant == 'default' && 'md:sticky top-0'
      )}
    >
      <div className={cn('hidden md:block', headerVariants({ variant }))}>
        <div className="flex flex-row justify-start px-6 pb-2 pt-3 w-full gap-2">
          <nav className="flex grow flex-row justify-center items-center gap-3 lg:gap-8">{desktopItems}</nav>
        </div>
      </div>
      <MobileHeader>{mobileItems}</MobileHeader>
    </header>
  );
};
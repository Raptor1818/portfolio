// Based from https://ui.indie-starter.dev/docs/header
'use client';

import { Button } from '@/components/ui/button';
import { CgClose, CgMenu } from 'react-icons/cg';
import * as React from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

export const MobileHeader = ({
  children,
}: {
  children: ({
    setIsOpen,
  }: {
    /**
     * Set the open state of the mobile header, use to close the header when a link is clicked
     */
    setIsOpen: (open: boolean) => void;
  }) => React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className={cn(
        'md:hidden px-4 pt-2 fixed top-0 z-999',
        isOpen && 'min-h-screen dark:bg-zinc-950 bg-zinc-50 size-full'
      )}
    >
      <div className="flex flex-row justify-start pb-2 gap-2">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className='border dark:bg-zinc-950 bg-zinc-50'
        >
          {isOpen ? <CgClose className=' dark:text-white text-black' /> : <CgMenu className=' dark:text-white text-black' />}
        </Button>
        <ThemeToggle
          className='dark:bg-zinc-950 bg-zinc-50'
          variant={null}
        />
      </div>

      <dialog
        open={isOpen}
        className={
          isOpen
            ? 'animate-popover-in flex flex-col gap-3 h-full w-full pt-4 px-4 bg-inherit'
            : 'hidden'
        }
      >
        {typeof children === 'function' ? children({ setIsOpen }) : children}
      </dialog>
    </div>
  );
};
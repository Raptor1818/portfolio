import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes'
import React from 'react'
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

type Props = {
  variant?: 'outline' | 'ghost' | null | undefined;
  size?: 'icon' | 'icon-sm' | 'icon-lg' | undefined;
  className?: string;
}

const ThemeToggle = ({ variant, size, className }: Props) => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      onClick={toggleTheme}
      variant={variant ?? 'outline'}
      size={size ?? 'icon'}
      className={cn(variant === 'ghost' && 'border', className)}
    >
      <Sun color="#000000" className='scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
      <Moon color="#ffffff" className='absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
    </Button>
  )
}

export default ThemeToggle
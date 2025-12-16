// Based from https://ui.indie-starter.dev/docs/header
'use client';

import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import ThemeToggle from '../ThemeToggle';

const headerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
];

const HeaderLink = (props: { href: string; name: string }) => {
  return <a href={props.href}>{props.name}</a>;
};
export const Navbar = () => (
  <Header
    sticky
    variant={'centered'}
    desktopItems={
      <>
        {headerLinks.map((link, i) => (
          <HeaderLink key={i} href={link.href} name={link.name} />
        ))}
        <ThemeToggle variant='ghost'></ThemeToggle>
      </>
    }
    mobileItems={({ setIsOpen }) => (
      <>
        {headerLinks.map((link) => (
          <Button
            key={link.href}
            asChild
            variant={'outline'}
            className="w-full rounded-xl justify-center"
            size="lg"
            onClick={() => setIsOpen(false)}
          >
            <a href={link.href}>{link.name}</a>
          </Button>
        ))}
        {/* <div className="flex-row-end w-full gap-3 border-t pt-4 border-dashed">
          {icons && (
            <div className="flex-row-center grow gap-2">
              {icons.map((icon) => (
                <Button
                  key={icon.name}
                  size="icon"
                  className="rounded-full"
                  variant={'outline'}
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={icon.href}>{icon.icon}</Link>
                </Button>
              ))}
            </div>
          )}
        </div> */}
      </>
    )}
  />
);
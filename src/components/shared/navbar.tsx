'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '../ui/button';

const Navbar = () => {
  const session = useSession();
  return (
    <section className='flex items-center justify-between w-full h-14 px-12 bg-zinc-900'>
      <Button variant='secondary'>
        <Link href={window.location.origin}>Logo</Link>
      </Button>
      <NavigationMenu>
        <NavigationMenuList>
          {!session.data?.user && (
            <>
              <NavigationMenuItem>
                <Link href='/register' legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Register
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href='/login' legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Log In
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </>
          )}
          {session.data?.user && (
            <>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='w-48'>
                  {session.data.user.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink className='w-48' asChild>
                    <Button
                      variant='secondary'
                      onClick={() =>
                        signOut({
                          redirect: true,
                          callbackUrl: `${window.location.origin}`,
                        })
                      }>
                      Sign Out
                    </Button>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </section>
  );
};

export default Navbar;

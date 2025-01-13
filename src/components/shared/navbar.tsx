'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '../ui/button';

const Navbar = () => {
  const session = useSession();
  return (
    <nav className='flex items-center justify-between w-full h-12 px-12 bg-zinc-300'>
      <p>Logo</p>
      {session.data?.user ? (
        <div className='flex items-center gap-2'>
          <p>{session.data.user.name}</p>
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
        </div>
      ) : (
        <div className='flex items-center gap-2'>
          <Button variant='secondary'>
            <Link href='/register'>Register</Link>
          </Button>
          <Button variant='secondary'>
            <Link href='/login'>Log in</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

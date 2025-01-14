"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { User } from "next-auth";

type NavBarProps = {
  user: User | null;
};

const Navbar = ({ user }: NavBarProps) => {
  const { data: session } = useSession();

  const userData = user ?? session?.user ?? null;

  return (
    <section className="flex items-center justify-between w-full h-14 px-12 bg-zinc-900">
      <Button variant="secondary">
        <Link href="/">Logo</Link>
      </Button>
      <NavigationMenu>
        <NavigationMenuList>
          {!userData && (
            <>
              <NavigationMenuItem>
                <Link href="/register" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Register
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/login" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Log In
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </>
          )}
          {userData && (
            <>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="w-48">
                  {userData.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink className="w-48" asChild>
                    <Button
                      variant="secondary"
                      onClick={() =>
                        signOut({
                          redirect: true,
                          callbackUrl: "/",
                        })
                      }
                    >
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

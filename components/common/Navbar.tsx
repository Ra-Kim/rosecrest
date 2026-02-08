"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const Navbar = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  const active = useMemo(() => {
    switch (pathname) {
      case "/":
        return "home";
      case "/about":
        return "about";
      case "/services":
        return "services";
      case "/contact":
        return "contact";
      default:
        return "home";
    }
  }, [pathname]);

  return (
    <nav
      className={`${sourceSans.className} absolute z-50 left-0 right-0 mx-auto top-4 lg:top-8 h-16 lg:h-20 max-w-[90%] lg:max-w-[90%] w-full grid grid-cols-3 items-center lg:flex lg:items-center lg:justify-between px-4 lg:px-8 bg-white/10 backdrop-blur-[30px] rounded-full border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src={`/assets/svgs/logo.svg`}
          alt="Rosecrest Group Ltd logo"
          width={252}
          height={38}
          className="hidden lg:block"
          priority
        />
        <Image
          src={`/assets/svgs/logo.svg`}
          alt="Rosecrest Group Ltd logo"
          width={120}
          height={29}
          className="block lg:hidden"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link href="/services"  passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white/20 transition-all ${
                    active === "services"
                      ? "text-white font-semibold"
                      : "text-white/90 font-normal"
                  }`}
                >
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about"  passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white/20 transition-all ${
                    active === "about"
                      ? "text-white font-semibold"
                      : "text-white/90 font-normal"
                  }`}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact"  passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white/20 transition-all ${
                    active === "contact"
                      ? "text-white font-semibold"
                      : "text-white/90 font-normal"
                  }`}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* CTA Button - Desktop */}
      <div className="hidden lg:block">
        <Link href="/contact">
          <Button
            className="bg-white text-[#1E293B] hover:bg-white/90 font-medium px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg min-h-12"
            size="lg"
          >
            Book a discussion
          </Button>
        </Link>
      </div>

      {/* Mobile - Current Page Indicator */}
      <div className="lg:hidden text-center">
        <p className="capitalize text-white text-sm font-medium tracking-wide">
          {active === "home" ? "" : active}
        </p>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex justify-end items-center">
        <Sheet open={navOpen} onOpenChange={setNavOpen}>
          <SheetTrigger className="lg:hidden text-white">
            <Menu className="w-7 h-7" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="px-6 w-[85vw] sm:w-100">
            <SheetTitle className="mb-8">
              <Link href="/" onClick={() => setNavOpen(false)}>
                <Image
                  src={`/assets/svgs/logo.svg`}
                  alt="Rosecrest Group Ltd logo"
                  width={120}
                  height={29}
                />
              </Link>
            </SheetTitle>
            
            {/* Mobile Navigation */}
            <nav className="mt-8">
              <ul className="flex flex-col gap-6">
                <li>
                  <Link
                    href="/services"
                    className={`text-lg font-medium transition-colors ${
                      active === "services"
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setNavOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`text-lg font-medium transition-colors ${
                      active === "about"
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setNavOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`text-lg font-medium transition-colors ${
                      active === "contact"
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setNavOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile CTA */}
            <div className="mt-12 pt-8 border-t">
              <Link href="/contact" onClick={() => setNavOpen(false)}>
                <Button className="w-full" size="lg">
                  Book a discussion
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
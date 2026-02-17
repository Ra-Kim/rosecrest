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

  const isHomePage = pathname === "/";

  const isDarkNav = useMemo(() => {
    const darkPaths = ["survey-level-1", "survey-level-2", "survey-level-3"];
    return darkPaths.some((val) => pathname.includes(val));
  }, [pathname]);

  // Homepage: Simple centered logo only
  if (isHomePage) {
    return (
      <nav
        className={`${sourceSans.className} absolute z-50 left-0 right-0 mx-auto top-4 lg:top-20 h-16 lg:h-20 max-w-[90%] lg:max-w-[90%] w-full flex items-center justify-center px-4 lg:px-8`}
      >
        {/* Logo - Centered */}
        <Link href="/" className="flex items-center">
          <Image
            src={`/assets/svgs/logo.svg`}
            alt="Rosecrest Group Ltd logo"
            width={252}
            height={38}
            className=""
            priority
          />
        </Link>
      </nav>
    );
  }

  // Other pages: Full navigation
  return (
    <nav
      className={`${sourceSans.className} absolute z-50 left-0 right-0 mx-auto top-4 lg:top-8 h-16 lg:h-20 max-w-[90%] lg:max-w-[90%] w-full grid grid-cols-3 items-center lg:flex lg:items-center lg:justify-between px-4 lg:px-8 bg-white/10 backdrop-blur-[30px] rounded-full border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src={
            isDarkNav ? `/assets/svgs/logo-blue.svg` : `/assets/svgs/logo.svg`
          }
          alt="Rosecrest Group Ltd logo"
          width={252}
          height={38}
          className="hidden lg:block"
          priority
        />
        <Image
          src={
            isDarkNav ? `/assets/svgs/logo-blue.svg` : `/assets/svgs/logo.svg`
          }
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
          <NavigationMenuList className="gap-16">
            <NavigationMenuItem>
              <NavigationMenuLink href="/services">
                <p
                  className={`${sourceSans.className} bg-transparent hover:underline transition-all ${
                    active === "services" ? "font-semibold" : "font-normal"
                  } ${isDarkNav ? "text-[#151515]" : "text-white"}`}
                >
                  Services
                </p>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about">
                <p
                  className={`${sourceSans.className} bg-transparent hover:underline ${isDarkNav ? "text-[#151515]" : "text-white"} transition-all ${
                    active === "about" ? "font-semibold" : "font-normal"
                  }`}
                >
                  About
                </p>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact">
                <p
                  className={`${sourceSans.className} bg-transparent hover:underline ${isDarkNav ? "text-[#151515]" : "text-white"} transition-all ${
                    active === "contact" ? "font-semibold" : "font-normal"
                  }`}
                >
                  Contact
                </p>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* CTA Button - Desktop */}
      <div className="hidden lg:block">
        <Link href="/contact">
          <Button
            className={`${isDarkNav ? "bg-[#262A6F] text-white" : "bg-white text-[#1E293B]"}  hover:bg-white/90 font-medium px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg min-h-12`}
            size="lg"
          >
            Book a discussion
          </Button>
        </Link>
      </div>

      {/* Mobile - Current Page Indicator */}
      <div className="lg:hidden text-center">
        <p className="capitalize text-gray-900 text-sm font-medium tracking-wide">
          {active === "home" ? "" : active}
        </p>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex justify-end items-center">
        <Sheet open={navOpen} onOpenChange={setNavOpen}>
          <SheetTrigger className="lg:hidden text-gray-900">
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

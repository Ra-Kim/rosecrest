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
import { Menu, Phone } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

const NAV_LINKS = [
  { href: "/services", label: "Services", key: "services" },
  { href: "/areas-we-cover", label: "Areas we cover", key: "areas-we-cover" },
  { href: "/about", label: "About Rosecrest", key: "about" },
];

const PHONE = "020 4576 5317";
const PHONE_HREF = "tel:02045765317";

const Navbar = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  const active = useMemo(() => {
    if (pathname === "/") return "home";
    const match = NAV_LINKS.find((l) => pathname.startsWith(l.href));
    return match?.key ?? "home";
  }, [pathname]);

  const isHomePage = pathname === "/";

  const isDarkNav = useMemo(() => {
    const darkPaths = ["survey-level-1", "survey-level-2", "survey-level-3"];
    return darkPaths.some((val) => pathname.includes(val));
  }, [pathname]);

  // Homepage: centered logo only
  if (isHomePage) {
    return (
      <nav
        className={`${sourceSans.className} absolute z-50 left-0 right-0 mx-auto top-4 lg:top-20 h-16 lg:h-20 max-w-[90%] w-full flex items-center justify-center px-4 lg:px-8`}
      >
        <Link href="/">
          <Image
            src="/assets/svgs/logo.svg"
            alt="Rosecrest Group Ltd logo"
            width={252}
            height={38}
            priority
          />
        </Link>
      </nav>
    );
  }

  const textColor = isDarkNav ? "text-[#151515]" : "text-white";
  const logoSrc = isDarkNav ? "/assets/svgs/logo-blue.svg" : "/assets/svgs/logo.svg";

  return (
    <nav
      className={`${sourceSans.className} absolute z-50 left-0 right-0 mx-auto top-4 lg:top-8 h-16 lg:h-20 max-w-[90%] w-full flex items-center justify-between px-4 lg:px-8 bg-white/10 backdrop-blur-[30px] rounded-full border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center shrink-0">
        <Image
          src={logoSrc}
          alt="Rosecrest Group Ltd logo"
          width={252}
          height={38}
          className="hidden lg:block"
          priority
        />
        <Image
          src={logoSrc}
          alt="Rosecrest Group Ltd logo"
          width={120}
          height={29}
          className="block lg:hidden"
          priority
        />
      </Link>

      {/* Desktop — Nav links */}
      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList className="gap-10 xl:gap-14">
            {NAV_LINKS.map((link) => (
              <NavigationMenuItem key={link.key}>
                <NavigationMenuLink href={link.href}>
                  <p
                    className={`${sourceSans.className} bg-transparent hover:underline transition-all ${textColor} ${
                      active === link.key ? "font-semibold" : "font-normal"
                    }`}
                  >
                    {link.label}
                  </p>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Desktop — Phone + CTA */}
      <div className="hidden lg:flex items-center gap-8">
        <Link
          href={PHONE_HREF}
          className={`${sourceSans.className} flex items-center gap-2 ${textColor} hover:opacity-80 transition-opacity text-base font-medium`}
        >
          <Phone className="w-5 h-5 shrink-0" />
          {PHONE}
        </Link>

        <Link href="/request-inspection">
          <Button
            className={`${
              isDarkNav ? "bg-[#262A6F] text-white" : "bg-white hover:bg-white/90 text-[#1E293B]"
            }  font-medium px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg min-h-12`}
            size="lg"
          >
            Request an Inspection
          </Button>
        </Link>
      </div>

      {/* Mobile — Current page label */}
      <div className="hidden text-center">
        <p className="capitalize text-gray-900 text-sm font-medium tracking-wide">
          {active === "home" ? "" : active.replace(/-/g, " ")}
        </p>
      </div>

      {/* Mobile — Hamburger */}
      <div className="lg:hidden flex justify-end items-center">
        <Sheet open={navOpen} onOpenChange={setNavOpen}>
          <SheetTrigger className="text-gray-900">
            <Menu className="w-7 h-7 text-white" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="px-6 w-[85vw] sm:w-100">
            <SheetTitle className="mb-8">
              <Link href="/" onClick={() => setNavOpen(false)}>
                <Image
                  src="/assets/svgs/logo-blue.svg"
                  alt="Rosecrest Group Ltd logo"
                  width={150}
                  height={49}
                />
              </Link>
            </SheetTitle>

            <nav className="mt-8">
              <ul className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className={`text-lg font-medium transition-colors ${
                        active === link.key
                          ? "text-[#262A6F]"
                          : "text-foreground hover:text-[#262A6F]"
                      }`}
                      onClick={() => setNavOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile phone */}
            <div className="mt-8">
              <Link
                href={PHONE_HREF}
                className="flex items-center gap-2 text-[#262A6F] font-medium text-base"
                onClick={() => setNavOpen(false)}
              >
                <Phone className="w-4 h-4" />
                {PHONE}
              </Link>
            </div>

            <div className="h-36  mt-80 pt-8 border-t">
              <Link href="/request-inspection" onClick={() => setNavOpen(false)}>
                <Button className="w-full bg-[#262A6F] text-white rounded-full" size="lg">
                  Request an Inspection
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
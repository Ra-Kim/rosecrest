import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { sourceSans } from "@/lib/fonts";

interface QuickLink {
  label: string;
  href: string;
}

interface FooterProps {
  quickLinks?: QuickLink[];
}

const defaultQuickLinks: QuickLink[] = [
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Terms of Engagement", href: "/terms" },
];

const Footer: React.FC<FooterProps> = ({ quickLinks = defaultQuickLinks }) => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: Mail,
      label: "info@rosecrest.co.uk",
      href: "mailto:info@rosecrest.co.uk",
    },
    {
      icon: Phone,
      label: "+44 (0) 20 1234 5678",
      href: "tel:+442012345678",
    },
    {
      icon: MapPin,
      label:
        "71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ",
      href: "#",
    },
  ];

  const accreditations = [
    "RICS Regulated",
    "Constructionline Gold",
    "SafeContractor",
  ];

  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1: Logo & Description */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/assets/svgs/logo-blue.svg"
                alt="Rosecrest Group Ltd"
                width={350}
                height={54}
                className="-ml-1.5"
              />
            </Link>

            <p
              className={`${sourceSans.className} text-[#64748B] text-sm lg:text-base leading-relaxed max-w-sm mt-6`}
            >
              Professional property inspection and reporting services across the
              UK. RICS regulated and committed to excellence.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-[#1E293B] text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`${sourceSans.className} text-[#64748B] hover:text-[#1E3A8A] transition-colors text-sm lg:text-base`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get in Touch */}
          <div>
            <h3 className="font-semibold text-[#1E293B] text-lg mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`${sourceSans.className} flex items-center gap-3 text-[#64748B] hover:text-[#1E3A8A] transition-colors text-sm lg:text-base group`}
                  >
                    <item.icon className="w-5 h-5 shrink-0 text-[#1E3A8A]" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p
              className={`${sourceSans.className} text-[#64748B] text-sm text-center md:text-left`}
            >
              © {currentYear} Rosecrest Group Ltd. All rights reserved.
            </p>

            {/* Accreditations */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 lg:gap-6">
              {accreditations.map((accreditation, index) => (
                <React.Fragment key={index}>
                  <span
                    className={`${sourceSans.className} text-[#64748B] text-xs lg:text-sm`}
                  >
                    {accreditation}
                  </span>
                  {index < accreditations.length - 1 && (
                    <span className="text-[#CBD5E1]">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

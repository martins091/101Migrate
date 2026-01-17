"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services#eb2-niw", label: "EB-2 NIW Support" },
      { href: "/services#eb1a", label: "EB-1A Support" },
      { href: "/services#consultation", label: "Consultations" },
      { href: "/services#review", label: "Petition Review" },
    ],
  },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-foreground text-background py-2">
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+2348012345678"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+234 801 234 5678</span>
            </a>
            <a
              href="mailto:info@101migrate.com"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info@101migrate.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-background/70">
              Trusted by 500+ Professionals Worldwide
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          "fixed top-0 lg:top-10 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/98 backdrop-blur-xl shadow-lg shadow-foreground/5 lg:top-0"
            : "bg-transparent",
        )}
      >
        <nav className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group relative z-10"
            >
              <Image
                src="/images/phoenix-09-create-a-modern-company-logo-for-101migrate-incorpo-0-20-281-29.jpeg"
                alt="101Migrate Logo"
                width={340}
                height={90}
                className="h-14 lg:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() =>
                    link.children && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "px-5 py-3 text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-1 rounded-full",
                      pathname === link.href
                        ? isScrolled
                          ? "text-primary"
                          : "text-secondary"
                        : isScrolled
                          ? "text-foreground/80 hover:text-primary hover:bg-muted/50"
                          : "text-background/90 hover:text-secondary hover:bg-background/10",
                    )}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          activeDropdown === link.label && "rotate-180",
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {link.children && (
                    <div
                      className={cn(
                        "absolute top-full left-0 pt-2 transition-all duration-300",
                        activeDropdown === link.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2",
                      )}
                    >
                      <div className="bg-card rounded-2xl shadow-xl border border-border p-2 min-w-[220px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-muted rounded-xl transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 rounded-full font-medium tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
              >
                <Link href="/booking">Book Consultation</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-3 rounded-xl transition-colors relative z-10",
                isScrolled
                  ? "hover:bg-muted text-foreground"
                  : "hover:bg-background/10 text-background",
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden fixed inset-0 bg-background z-40 transition-all duration-500",
            isMobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none",
          )}
        >
          <div className="container mx-auto px-6 pt-28 pb-8 flex flex-col h-full">
            <div className="flex-1 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block py-4 text-2xl font-medium transition-all duration-300",
                      isMobileMenuOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4",
                      pathname === link.href
                        ? "text-primary"
                        : "text-foreground/80",
                    )}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-6 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="py-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full"
            >
              <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                Book Consultation
              </Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}

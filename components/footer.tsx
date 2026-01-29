import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Send,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  services: [
    { label: "EB-2 NIW Support", href: "/services#eb2-niw" },
    { label: "EB-1A Support", href: "/services#eb1a" },
    { label: "Petition Review", href: "/services#review" },
    { label: "Consultations", href: "/services#consultation" },
    { label: "RFE Assistance", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Success Stories", href: "/about#testimonials" },
    { label: "Blog", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "EB-2 NIW Guide", href: "/resources" },
    { label: "EB-1A Criteria", href: "/resources" },
    { label: "FAQ", href: "/about#faq" },
    { label: "Free Resources", href: "/resources" },
    { label: "Community", href: "/contact#community" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Top CTA Bar */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Send className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Subscribe to our newsletter
                </h4>
                <p className="text-background/60 text-sm">
                  Get immigration tips and updates delivered to your inbox
                </p>
              </div>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 h-12 px-5 rounded-full bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-secondary"
              />
              <button
                type="submit"
                className="h-12 px-6 rounded-full bg-secondary text-foreground font-medium hover:bg-secondary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/phoenix-09-create-a-modern-company-logo-for-101migrate-incorpo-0-20-281-29.jpeg"
                alt="101Migrate Logo"
                width={180}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-background/70 leading-relaxed mb-6 max-w-sm">
              Your one-stop gateway to U.S. immigration success. Premium
              educational and strategic support services for EB-2 NIW and EB-1A
              pathways. Based in Nigeria, serving clients globally.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-11 h-11 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary/20 hover:text-secondary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-5 text-background text-lg">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-secondary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-5 text-background text-lg">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-secondary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-5 text-background text-lg">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-secondary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* WhatsApp Join Group */}
            <div className="mt-6">
              <a
                href="https://chat.whatsapp.com/JMGsctcfScp4vRURr8FiIN?mode=gi_c"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-background/5 hover:bg-background/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <p className="font-medium text-sm">WhatsApp</p>
                  <p className="text-xs text-background/50">Join Group</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60 text-center lg:text-left">
              © {new Date().getFullYear()} 101Migrate. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-background/60">
              <Link href="#" className="hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-6 pt-6 border-t border-background/10">
            <p className="text-xs text-background/40 text-center leading-relaxed max-w-5xl mx-auto">
              <strong className="text-background/60">Disclaimer:</strong>{" "}
              101Migrate is not a law firm and does not provide legal advice. We
              do not represent clients before USCIS. Our services are
              educational, strategic, and drafting support services only.
              Clients are responsible for filing petitions independently or
              through a licensed U.S. immigration attorney. We make no
              guarantees regarding visa approvals or outcomes.
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-background/10 text-center">
            <p className="text-xs text-background/50">
              Developed by{" "}
              <a
                href="https://tinzwave.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 font-medium transition-colors"
              >
                Tinzwave Technology
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

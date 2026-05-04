import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { navItems, programs, site } from "@/lib/data";

const socialIcons = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/dreamstarters.school",
    label: "Instagram"
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/share/1CbinFRoMU/?mibextid=wwXIfr",
    label: "Facebook"
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@dreamstarters_school?si=OJbarL9wUGslZoGr",
    label: "YouTube"
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/917736495754?text=Hi%20DreamStarters%2C%20I%20would%20like%20to%20enquire%20about%20admissions.",
    label: "WhatsApp"
  }
];

export function Footer() {
  return (
    <footer className="container-px border-t border-accent/10 bg-accent text-white">
      <div className="mx-auto grid max-w-7xl gap-10 py-14 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
        
        <div>
          <Image
            src="/images/logo-white-bg.png"
            alt="DreamStarters logo"
            width={190}
            height={190}
            className="mb-5 h-20 w-auto rounded-2xl bg-white object-contain p-2"
          />
          <p className="max-w-sm text-lg font-semibold">{site.tagline}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
            A premium experiential learning school for confident communicators,
            independent learners, problem solvers and future-ready individuals.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase text-primary">
            Quick links
          </h3>
          <div className="grid gap-3 text-sm text-white/75">
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase text-primary">
            Programs
          </h3>
          <div className="grid gap-3 text-sm text-white/75">
            {programs.map((program) => (
              <Link key={program.href} href={program.href} className="transition hover:text-white">
                {program.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase text-primary">
            Contact
          </h3>

          <div className="grid gap-4 text-sm text-white/75">
            <p className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
              <span>{site.location}</span>
            </p>

            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex gap-3 hover:text-white">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-primary" />
              <span>{site.phone}</span>
            </a>

            <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-white">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-primary" />
              <span>{site.email}</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex gap-3">
            {socialIcons.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary hover:text-black hover:scale-110"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 DreamStarters International School. All rights reserved.</p>
        <p>Designed by arte group</p>
      </div>
    </footer>
  );
}
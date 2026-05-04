import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Card, IconBadge } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact DreamStarters International School for admissions, campus visits, programs and careers."
};

export default function ContactPage() {
  return (
    <>
      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Reach us"
              title="We would love to meet your family."
              text="Share your child's age or grade so the team can guide you toward the right program and campus."
            />

            <div className="grid gap-4">

              {/* Phone */}
              <Card>
                <div className="flex gap-4">
                  <IconBadge>
                    <Phone className="h-5 w-5" />
                  </IconBadge>

                  <div className="w-full">
                    <h3 className="font-semibold text-accent">Phone</h3>

                    <div className="mt-2 space-y-1 text-sm text-slate-600">
                      <a href="tel:7736495754" className="block hover:text-[#fcce07]">
                        7736495754
                      </a>
                      <a href="tel:7736595754" className="block hover:text-[#fcce07]">
                        7736595754
                      </a>
                    </div>

                    {/* WhatsApp Button */}
                    <a
                      href="https://wa.me/917736495754?text=Hi%20DreamStarters%2C%20I%20would%20like%20to%20enquire%20about%20admissions."
                      target="_blank"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-600 hover:shadow-md"
                    >
                      <FaWhatsapp className="h-4 w-4" />
                      WhatsApp Enquiry
                    </a>
                  </div>
                </div>
              </Card>

              {/* Email */}
              <Card>
                <div className="flex gap-4">
                  <IconBadge>
                    <Mail className="h-5 w-5" />
                  </IconBadge>

                  <div>
                    <h3 className="font-semibold text-accent">Email</h3>
                    <a
                      className="mt-1 block text-sm text-slate-600 hover:text-[#fcce07]"
                      href={`mailto:${site.email}`}
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
              </Card>

              {/* Location */}
              <Card>
                <div className="flex gap-4">
                  <IconBadge>
                    <MapPin className="h-5 w-5" />
                  </IconBadge>

                  <div>
                    <h3 className="font-semibold text-accent">Location</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {site.location}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <Card>
                <div className="flex gap-4">
                  <IconBadge>
                    <FaInstagram className="h-5 w-5" />
                  </IconBadge>

                  <div>
                    <h3 className="font-semibold text-accent">Connect with us</h3>

                    <div className="mt-3 flex gap-3">

                      <a
                        href="https://www.instagram.com/dreamstarters.school"
                        target="_blank"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:bg-pink-50 hover:text-pink-500"
                      >
                        <FaInstagram className="h-4 w-4" />
                      </a>

                      <a
                        href="https://www.facebook.com/share/1CbinFRoMU/?mibextid=wwXIfr"
                        target="_blank"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:bg-blue-50 hover:text-blue-600"
                      >
                        <FaFacebookF className="h-4 w-4" />
                      </a>

                      <a
                        href="https://www.youtube.com/@dreamstarters_school?si=OJbarL9wUGslZoGr"
                        target="_blank"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:bg-red-50 hover:text-red-600"
                      >
                        <FaYoutube className="h-4 w-4" />
                      </a>

                    </div>
                  </div>
                </div>
              </Card>

            </div>
          </div>

          <ContactForm />
        </div>
      </SectionWrapper>
    </>
  );
}
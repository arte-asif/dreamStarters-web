import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, IconBadge } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { PageHero } from "@/sections/PageHero";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact DreamStarters International School for admissions, campus visits, programs and careers."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Plan a visit, ask a question or begin admissions."
        text="The DreamStarters team can help you understand programs, campuses, fees, transport, food and the right pathway for your child."
        image="/images/new/contact.jpeg"
      />
      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Reach us"
              title="We would love to meet your family."
              text="Share your child's age or grade so the team can guide you toward the right program and campus."
            />
            <div className="grid gap-4">
              <Card>
                <div className="flex gap-4">
                  <IconBadge>
                    <Phone className="h-5 w-5" />
                  </IconBadge>
                  <div>
                    <h3 className="font-semibold text-accent">Phone</h3>
                    <a className="mt-1 block text-sm text-slate-600" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                      {site.phone}
                    </a>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex gap-4">
                  <IconBadge>
                    <Mail className="h-5 w-5" />
                  </IconBadge>
                  <div>
                    <h3 className="font-semibold text-accent">Email</h3>
                    <a className="mt-1 block text-sm text-slate-600" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex gap-4">
                  <IconBadge>
                    <MapPin className="h-5 w-5" />
                  </IconBadge>
                  <div>
                    <h3 className="font-semibold text-accent">Location</h3>
                    <p className="mt-1 text-sm text-slate-600">{site.location}</p>
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

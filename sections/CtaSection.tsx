import { ButtonLink } from "@/components/Button";
import { SectionWrapper } from "@/components/SectionWrapper";

export function CtaSection({
  title = "Start Your Child's Future Today",
  text = "Book a visit and experience how DreamStarters blends care, academics, projects, life skills and future-ready learning.",
  button = "Apply Now",
  href = "/admissions"
}: {
  title?: string;
  text?: string;
  button?: string;
  href?: string;
}) {
  return (
    <SectionWrapper className="bg-hero-soft">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-accent p-8 text-center text-white shadow-soft sm:p-12 lg:p-16">
        <p className="mb-4 text-sm font-bold uppercase text-primary">
          Admissions
        </p>
        <h2 className="text-balance text-3xl font-semibold sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">{text}</p>
        <div className="mt-8">
          <ButtonLink href={href} variant="secondary">
            {button}
          </ButtonLink>
        </div>
      </div>
    </SectionWrapper>
  );
}

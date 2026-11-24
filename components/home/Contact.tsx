import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TechIcon from "@/components/ui/TechIcon";
import { contactLinks } from "@/data/links";
import { socialIcons } from "@/data/socialIcons";

// Change this once a year.
const copyrightYear = 2026;

export default function Contact() {
  return (
    <Section id="contact" tone="cream">
      <Reveal>
        <SectionHeading
          align="center"
          label="07 / CONTACT"
          title={
            <>
              Contact <span className="text-(--accent)">me.</span>
            </>
          }
        />
      </Reveal>

      {/* Round icon buttons. The addresses are set in data/links.ts */}
      <Reveal>
        <ul className="contact-icons">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                // Profile links open in a new tab; the email link does not.
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-label={
                  link.external
                    ? `${link.label} (opens in a new tab)`
                    : `Send an email to ${link.display}`
                }
                title={link.label}
                className="contact-icon"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={socialIcons[link.icon]} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Footer bar */}
      <div className="contact-footer">
        <p>&copy; Wasi Farabi, {copyrightYear}</p>

        <div
          className="contact-built"
          role="img"
          aria-label="Built with Next.js, React and Tailwind CSS"
        >
          <span aria-hidden="true">Built with</span>
          <TechIcon name="nextjs" size={18} />
          <TechIcon name="react" size={18} />
          <TechIcon name="tailwind" size={18} />
        </div>
      </div>
    </Section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ArtGrid from "@/components/ui/ArtGrid";
import { featuredArtworks } from "@/data/artwork";

export default function Art() {
  return (
    <Section id="art" tone="navy">
      <Reveal>
        <SectionHeading
          label="06 / ART"
          title="Art"
          description="Selected artwork. More in the gallery."
        />
      </Reveal>

      <ArtGrid items={featuredArtworks} />

      <div className="centered-actions">
        <Link href="/gallery" className="outline-button">
          Show More
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GalleryHeader from "@/components/navigation/GalleryHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ArtGrid from "@/components/ui/ArtGrid";
import { galleryArtworks } from "@/data/artwork";

export const metadata: Metadata = {
  title: "Art Gallery | Wasi Farabi",
  description: "More artwork by Wasi Farabi.",
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryHeader />

      <section id="gallery" className="gallery-page">
        <div className="site-width">
          <Reveal>
            <SectionHeading label="ART / GALLERY" title="Art gallery" />
          </Reveal>

          <ArtGrid items={galleryArtworks} />

          <div className="centered-actions">
            <Link href="/#art" className="outline-button">
              <ArrowLeft size={15} aria-hidden="true" />
              Back to portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

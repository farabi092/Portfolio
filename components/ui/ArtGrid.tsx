import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import type { Artwork } from "@/data/artwork";

// Small, uniform portrait cards, four across (two on tablets and phones).
// The layout lives in app/globals.css (.artwork-grid, .artwork-card).
//
// Each card shows the artwork filling the card. A picture with a different
// shape is trimmed at the edges ON SCREEN ONLY; the image files are never
// changed.
export default function ArtGrid({ items }: { items: Artwork[] }) {
  return (
    <ul className="artwork-grid">
      {items.map((art, index) => (
        <li key={art.src}>
          <Reveal delay={(index % 4) * 0.06} className="artwork-card">
            <Image
              src={art.src}
              alt={art.alt}
              fill
              sizes="(min-width: 901px) 285px, 50vw"
              quality={85}
              className="artwork-img"
            />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

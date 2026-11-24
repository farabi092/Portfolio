import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export default function GalleryHeader() {
  return (
    <header className="floating-nav">
      <Link href="/" className="nav-brand">
        WASI FARABI<span>.</span>
      </Link>

      <Link href="/#art" className="outline-button">
        <ArrowLeft size={14} aria-hidden="true" />
        Back to portfolio
      </Link>
    </header>
  );
}

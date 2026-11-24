import { techIcons, type TechIconName } from "@/data/techIcons";

type TechIconProps = {
  name: TechIconName;
  size?: number;
  className?: string;
};

// Draws one technology logo. It takes its colour from the surrounding
// text colour, so it follows the section's palette automatically.
export default function TechIcon({
  name,
  size = 40,
  className,
}: TechIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d={techIcons[name]} />
    </svg>
  );
}

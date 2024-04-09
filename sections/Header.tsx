import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

type Type = "dark" | "light";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
}

export const ColorType: Record<Type, string> = {
  "dark": "base-content",
  "light": "base-100",
};

export const StyleType: Record<"background" | "color", string> = {
  "background": "bg-",
  "color": "text-",
};

const generateLineStyles = (position: string) => `
  absolute ${position} z-50 block h-0.5 w-7 bg-black transition-all duration-200 ease-out 
`;

const lineStyles = [
  generateLineStyles("top-[-0.7rem]") +
  "peer-checked:translate-y-[0.7rem] peer-checked:rotate-[45deg]",
  generateLineStyles("top-[-0.35rem]") + "peer-checked:opacity-0",
  generateLineStyles("top-[0]") +
  "peer-checked:-translate-y-[0.2rem] peer-checked:-rotate-[45deg]",
];

export default function Haader({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
}: Nav) {
  return (
    <nav class="w-full md:px-32 py-7 bg-base  border border-solid border-zinc-700">
      <div class="flex gap-8 items-center justify-center md:justify-start">
        <a href="/">
          <Image src={logo.src || ""} width={57} alt={logo.alt} />
        </a>
      </div>
    </nav>
  );
}

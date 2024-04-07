import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  logoImg: ImageWidget;
  logoImgAlt: string;
  logoSubTitle?: string;
}

export default function MainLogo({logoImg, logoImgAlt, logoSubTitle}: Props) {
  return (<div class="bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-950 px-10 sm:px-16 pt-16 flex flex-col items-center text-white">
    <div class="inline-block max-w-[744px]">
      <Image 
        width={715}
        src={logoImg}
        alt={logoImgAlt}
      />
    </div>
    <h2 class="text-justify text-2xl sm:text-3xl font-thin text-secondary py-4">
      {logoSubTitle || ""}
    </h2>
  </div>)
}
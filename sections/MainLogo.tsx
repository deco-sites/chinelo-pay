import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  logoImg: ImageWidget;
  logoImgAlt: string;
  logoSubTitle: string;
}

export default function MainLogo({logoImg, logoImgAlt, logoSubTitle}: Props) {
  return (<div class="bg-gradient-to-r from-zinc-800 via-zinc-950 to-black px-10 sm:px-16 pt-16 flex flex-col items-center text-white">
    <div class="inline-block">
      <Image 
        width={715}
        src={logoImg}
        alt={logoImgAlt}
      />
    </div>
    <p class="text-justify text-2xl sm:text-3xl font-thin text-zinc-400 py-4">
      {logoSubTitle}
    </p>
  </div>)
}
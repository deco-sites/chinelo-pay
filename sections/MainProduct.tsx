import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  productImage: ImageWidget;
  productImageAlt?: string;
}

export default function MainProduct({productImage, productImageAlt}:Props) {
  return (<div class="bg-gradient-to-r from-zinc-800 via-zinc-950 to-black px-10 sm:px-16 pt-16 flex items-center text-white">
    <div class="inline-block">
      <Image 
        src={productImage}
        alt={productImageAlt || ""}
        width={1000}
      />
    </div>
  </div>)
}
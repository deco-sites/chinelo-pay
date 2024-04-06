import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  productImage: ImageWidget;
  productImageAlt?: string;
  benefitsTitle: string;
  benefits: string[];
}

export default function MainProduct({productImage, productImageAlt, benefitsTitle, benefits}:Props) {
  return (<div class="bg-gradient-to-r from-zinc-800 via-zinc-900 to-black px-10 sm:px-16 pt-16 flex flex-col lg:flex-row items-center text-white">
    <div class="sm:inline-block">
      <Image 
        src={productImage}
        alt={productImageAlt || ""}
        width={1000}
      />
    </div>
    <div class="min-w-[410px] min-h-[400px]">
      <h2 class="text-lg mb-4">{benefitsTitle}</h2>
      {
        benefits.map(benefit => (
          <p class="font-light my-2">{benefit}</p>
        ))
      }
    </div>
  </div>)
}
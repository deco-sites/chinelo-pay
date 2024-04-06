import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  productImage: ImageWidget;
  productImageAlt?: string;
  benefitsTitle: string;
  benefits: string[];
  benefitsIcon?: ImageWidget;
}

export default function MainProduct({productImage, productImageAlt, benefitsTitle, benefits, benefitsIcon}:Props) {
  return (<div class="bg-gradient-to-r from-zinc-800 via-zinc-950 to-zinc-950 px-10 sm:px-16 pt-16 flex flex-col lg:flex-row items-center text-white">
    <div class="sm:inline-block">
      <Image 
        src={productImage}
        alt={productImageAlt || ""}
        width={1000}
      />
    </div>
    <div class="sm:min-w-[430px] min-h-[400px]">
      <h2 class="text-lg mb-4">{benefitsTitle}</h2>
      {
        benefits.map(benefit => (
          <div class="flex">
            <Image
              src={benefitsIcon || ""}
              alt="ícone de lista"
              width={18}
            />
            <p class="font-light m-2">{benefit}</p>
          </div>
        ))
      }
    </div>
  </div>)
}
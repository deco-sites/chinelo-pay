import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import WaitListForm from "site/islands/WaitListForm.tsx";

interface Props {
  /**
 * @title Imagem do produto principal
 */
  productImage: ImageWidget;
  /**
 * @title descrição da imagem do produto
 */
  productImageAlt?: string;
  /**
 * @title Texto acima dos beneficios
 */
  benefitsTitle: string;
  /**
 * @title beneficios
 */
  benefits: string[];
  /**
 * @title icone dos beneficios
 */
  benefitsIcon?: ImageWidget;
  /**
 * @title Texto da waitlist
 */
  waitListTitle: string;
  /**
 * @title Texto do botão da waitlist
 */
  waitListButtonText: string;
  /**
 * @title Link dos termos de privacidade
 */
  privacyTermsLink: string;
  /**
 * @title Link dos termos de uso
 */
  useTermsLink: string;
}

export default function MainProduct({productImage, productImageAlt, benefitsTitle, benefits, benefitsIcon, waitListTitle, waitListButtonText, privacyTermsLink, useTermsLink}:Props) {
  return (<div class="bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-950 px-10 sm:px-16 pt-16 flex flex-col lg:flex-row items-start justify-center text-primary min-h-[100vh]">
    <div class="lg:w-[50%] flex items-center justify-end">
        <Image 
          src={productImage}
          alt={productImageAlt || ""}
          width={636}
        />
  
    </div>
    <div class="lg:w-[50%] min-h-[400px]">
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
      <WaitListForm 
        waitListTitle={waitListTitle}
        waitListButtonText={waitListButtonText}
        privacyTermsLink={privacyTermsLink}
        useTermsLink={useTermsLink}
      />
    </div>
  </div>)
}
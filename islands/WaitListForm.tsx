import { JSX } from "preact/jsx-runtime";
import { useState } from 'preact/hooks';

interface Props {
  waitListTitle: string;
  waitListButtonText: string;
  privacyTermsLink: string;
  useTermsLink: string;
}

export default function WaitListForm({waitListTitle, waitListButtonText, privacyTermsLink, useTermsLink}: Props) {
  const [email, setEmail] = useState("");

  // const formData = {
  //   name: "Form-chinelopay",
  //   pageId: "6605bad1071b70f087174913",
  //   elementId: "3aa60eab-7e3d-790e-d7d4-eb8e0ef36041",
  //   source: "https://www.ng.cash/marketing/chinelopay",
  //   test: false,
  //   dolphin: false
  // }

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    // fetch('https://webflow.com/api/v1/form/6385128589ca38c0cb82b578',{
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({...formData, fields: {
    //     'Ebook Email': email
    //   }, })
    // })
  }

  const handleChange:JSX.GenericEventHandler<HTMLInputElement> = (e:any) => {
    setEmail(e.target.value);
  }
  return (<div class="mt-3">
    <p class="font-thin">{waitListTitle}</p>
    <form class="mt-2" onSubmit={handleSubmit}>
      <input 
        class="mr-2 mt-2 py-3 px-4 rounded-lg text-black"
        type="email"
        data-wait="Só um momento..."
        placeholder="insira o seu melhor email"
        onChange={handleChange}
        required
      />
      <input
        type="submit"
        class="cursor-pointer border border-accent rounded-lg py-3 px-6 my-2 text-base"
        value={waitListButtonText}
      />
    </form>
    <p class="font-extralight text-secondary text-xs max-w-[427px]">
      Ao enviar o formulário, concordo com o tratamento dos meus dados
      pessoais conforme a <a class="font-bold border-b cursor-pointer" href={privacyTermsLink}>Política de Privacidade</a> e os <a class="font-bold border-b cursor-pointer" href={useTermsLink}>Termos de Uso</a>.
    </p>
  </div>)
}
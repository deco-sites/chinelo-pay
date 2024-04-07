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

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
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
    <p class="font-extralight text-secondary text-xs">
      Ao enviar o formulário, concordo com o tratamento dos meus dados
      pessoais conforme a <a class="font-bold border-b cursor-pointer" href={privacyTermsLink}>Política de Privacidade</a> e os <a class="font-bold border-b cursor-pointer" href={useTermsLink}>Termos de Uso</a>.
    </p>
  </div>)
}
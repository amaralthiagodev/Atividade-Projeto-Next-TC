import FilmeForm from "@/componentes/FilmeForm/FilmeForm";
import { getFilme } from "@/services/filme.services";

//Next16
interface Props{
  params: Promise<{id: string}>;
}

export default async function EditarFilmePage({ params}: Props) {
  const {id} = await params;

  //tem que implemetar lá no service para buscar um unico filme no back utilizar o megabrain na força maxima ele precisa saber mais libera o mindset
  const filme = await getFilme(id);
  return (
    <>
      <FilmeForm filme={filme} />
    </>
  );
}
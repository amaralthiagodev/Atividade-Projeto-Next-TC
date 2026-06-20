import {Filme, CreateFilmeDTO, UpdateFilmeDTO} from "@/tipos/filme";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL;

export async function getFilmes(): Promise<Filme[]>
{
  const response = await fetch(`${API_URL}/filmes`);
  const dados = await response.json()
  return dados;
}

// export async function getFilme(id: string): Promise<Filme> {

// }

export async function createFilme(filme: CreateFilmeDTO): Promise<void>
{
 //ir la no backend e pedir para salvar no banco
  await fetch(`${API_URL}/filmes`,{
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(filme)
  });
}


export async function updateFilme(id: number, filme: UpdateFilmeDTO): Promise<void>
{
  //ir la no backend e pedir para atualizar no banco
  await fetch(`${API_URL}/filmes/${id}`,{
    method:"PUT",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(filme)
  });
}

export async function deleteFilme(id: number): Promise<void>
{
  //ir lá no banco e pedir para deletar o filme
  await fetch (`${API_URL}/filmes/${id}`,{
    method:"DELETE"
  })

}
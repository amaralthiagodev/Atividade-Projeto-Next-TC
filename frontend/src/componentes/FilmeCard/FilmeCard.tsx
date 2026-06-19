"use client"


import { Filme } from "@/tipos/filme";
import Link from "next/link";
import '@/componentes/FilmeCard/FilmeCard.css'
import Image from "next/image";

interface FilmeCardProps{
    filme: Filme;
    onDelete: (id: number) => void
}

function FilmeCard({filme, onDelete}: FilmeCardProps){
    return(
        <div className="card">
            {/* <img src={filme.imagem} alt={filme.titulo} /> */}

            <Image
                src={filme.imagem}
                alt={filme.titulo}
                width={350}
                height={400}
            
            />
            <h2>Nome do Filme</h2>

            <p>Nota</p>

            <div className="btn-acoes">
                <Link href={`/filmes/${filme.id}/editar`}>Editar</Link>
                <button onClick={() => onDelete?.(filme.id)}>Deletar</button>
            </div>

        </div>
    );
}

export default FilmeCard
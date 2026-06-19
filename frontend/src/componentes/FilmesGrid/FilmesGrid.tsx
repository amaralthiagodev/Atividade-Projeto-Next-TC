"use client"

import {useRouter} from "next/navigation";
import FilmeCard from "../FilmeCard/FilmeCard";
import { deleteFilme } from "@/services/filme.services";
import { Filme } from "@/tipos/filme";
import '@/componentes/FilmesGrid/FilmeGrid.css'

interface FilmeGridProps{
    filmes: Filme[]
}
function FilmeGrid({filmes} : FilmeGridProps){

    const router = useRouter()
    async function handleDelete(id:number){

        await deleteFilme(id);
        router.refresh()

    }
    const filme$map = filmes.map((f) => {
        return <FilmeCard key={f.id} filme={f} 
                onDelete={handleDelete}/>
    })

    return(

        <div className="grid">
            {filme$map}
        </div>
    );

}

export default FilmeGrid
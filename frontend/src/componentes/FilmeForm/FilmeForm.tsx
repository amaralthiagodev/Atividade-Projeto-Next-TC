"use client";

import '@/componentes/FilmeForm/FilmeForm.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Filme } from '@/tipos/filme';
import { createFilme, updateFilme } from '@/services/filme.services';

interface Props{
    filme?: Filme;
}

export default function FilmeForm({filme} : Props)
{
    const router = useRouter();

    const [titulo,setTitulo] = useState(
        filme?.titulo ?? ""
    );

    const[imagem,setImagem] = useState(
        filme?.imagem ?? ""
    );

    const[nota,setNota] = useState(
        filme?.nota ?? 0
    );

    async function handleSubmit(e: React.SyntheticEvent){
        e.preventDefault();
        const payload = {
            titulo,
            imagem,
            nota
        }

        if(filme)
            await updateFilme(filme.id, payload);
        else
            await createFilme(payload);
        router.push('/');
    }

    return(
        <form onSubmit={handleSubmit} className='filme-form'>
            <h1>
                {
                    filme ? "Editar Filme" : "Novo Filme"
                }
            </h1>
            <div className='form-input'>
                <input 
                    type="text"
                    onChange={(e) => setTitulo(e.target.value)}
                    value={titulo}
                    placeholder='Titulo'
                />

            </div>
            <div className='form-input'>
                <input 
                    type="text"
                    placeholder='URL da Imagem'
                    value={imagem}
                    onChange={(e) => setImagem(e.target.value)}
                    />


            </div>
            <div className='form-input'>
                <input 
                    type="text" 
                    value={nota}
                    placeholder="Nota"
                    onChange={(e) => setNota(Number(e.target.value))}  
                    />
            </div>
                
            <button type='submit'>
                Salvar
            </button>
        </form>
    );
    
}   
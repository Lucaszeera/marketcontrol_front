import { useEffect, useState } from "react";
import { GetAll, DeleteById } from "./service";

//exemplo de como montar objeto usando parametros da api

const App = () =>{
    const [nomes, setNomes] = useState([])

    useEffect(()=>{
        _getAll()
    },  [])

    const _getAll = () =>{
        GetAll().then(
        (res)=>{
            let data = res.data

            setNomes(data.nome)
        },
        (err)=>{
            console.log(err.response)
        })
    }

    const _deleteById = (id)=>{
        DeleteById(id).then(
            (res)=>{  console.log("deletado com sucesso")},
            (err)=>{  console.log(err.response)}
        )
    }

    return(
        <>
        {nomes.map((item)=>(
            <>
                <p>{item.nome}</p>
                <button  onClick={()=>{_deleteById(item.id)}}>
                    Botão para deletar
                </button>
            </>
        ))}
        </>
    )
}
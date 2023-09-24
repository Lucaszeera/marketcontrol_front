import axios from "axios"

const api = 'https://localhost:8080/'

//precisa colocar o caminho certo
export async function GetAll() {
    return await axios.get(`${api}get`)
    
} 

export async function GetById(id){
    return await axios.get(`${api}get?id=${id}`)
}

export async function DeleteById(id){
    return await axios.delete(`${api}delete?id=${id}`)
}

export async function Update(form){
    return await axios.put(`${api}update`, form)
}

export async function Create(form){
    return await axios.post(`${api}create` , form)
}




import Link from "next/link"

export default function NavBar({active}) {
    return (

        
        <nav style={{ backgroundColor: "#F9F9F9" }} className='bg-fcfcfc p-4 flex justify-between'>
            <ul className='flex gap-12  items-end'>
                <li>
                    <h1 className='font-bold text-lg pr-24 mr-96 p-5'><Link href="/inicio">Home</Link></h1>
                </li>
                <li><Link href="/estoque">Estoque</Link></li>
                <li><Link href="/cadastrarProduto">Cadastrar produto</Link></li>
                <li><Link href="/cadastrarEstabelecimento">Cadastrar Estabelecimento</Link></li>
            </ul>
            <div><Link href='/perfil'><img style={{ borderRadius: "50px", flex: "flex" }} src="https://i.pravatar.cc/60" alt="perfil - meus dados"></img></Link></div>
        </nav>

    )
}
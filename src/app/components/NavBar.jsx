export default function NavBar(props) {
    return (

        <nav style={{ backgroundColor: "#F9F9F9" }} className='bg-fcfcfc p-4 flex justify-between'>
            <ul className='flex gap-12  items-end'>
                <li>
                    <h1 className='font-bold text-lg pr-24 mr-96 p-5'><a href="#">Market-control</a></h1>
                </li>
                <li><a href="#">Estoque</a></li>
                <li><a href="#">Cadastrar produto</a></li>
                <li><a href="#">Cadastrar filial</a></li>
            </ul>
            <div><a href='#'><img style={{ borderRadius: "50px", flex: "flex" }} src="https://i.pravatar.cc/60" alt="perfil - meus dados"></img></a></div>
        </nav>

    )
}
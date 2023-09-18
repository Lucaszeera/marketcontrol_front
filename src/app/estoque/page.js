import Image from 'next/image'

export default function Estoque() {
  return (
  <div>
    
    <nav style={{backgroundColor:"#F9F9F9"}} className='bg-fcfcfc p-4 flex justify-between'>
      <ul className='flex gap-12  items-end'>
        <li>
          <h1 className='font-bold text-lg pr-24 mr-96 p-5'><a href="#">Market-control</a></h1>
        </li>
        <li style={{fontWeight:"bold"}}><a href="#">Estoque</a></li>
        <li><a href="#">Cadastrar produto</a></li>
        <li><a href="#">Cadastrar filial</a></li>
      </ul>
      <div><a href='#'><img style={{borderRadius:"50px", flex:"flex"}} src="https://i.pravatar.cc/60" alt="perfil - meus dados"></img></a></div>
    </nav>

    <main style={{backgroundColor:"rgba(215, 255, 222, 0.78)"}} className='w-screen h-screen'> {/* main */}

    </main>
    
  </div> 
   
  )
}

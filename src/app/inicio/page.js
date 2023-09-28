import Link from 'next/link'
import NavBar from '../components/NavBar'
import Produto from './Produto'
export default function Inicio() {
  return (
    <div>
      <NavBar />
      <div style={{ backgroundColor: "rgba(215, 255, 222, 0.78)" }} className='w-screen h-screen flex justify-center'>
        <main className='bg-gray-400 m-20 p-10 w-3/5 rounded-lg'>{/* main */}

          <div id='data'>
              <Produto/>
              <Produto/>
          </div>

        </main>
      </div>

    </div>

  )
}

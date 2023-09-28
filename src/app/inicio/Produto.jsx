import { CubeIcon } from '@heroicons/react/24/solid'
import DropMenu from '../components/DropMenu'

export default function Produto() {
    return (
        <div id='data-row' className='group/row flex justify-between p-2 hover:bg-green-100 cursor-pointer'> {/* instancia de produto */}
            <div className='flex gap-3'>
                <CubeIcon className="h-5 w-5"></CubeIcon> {/* imagem */}
                <span>produto</span>
            </div>
            <span>10 unidades</span>
            <span>R$500</span>
            <span className="invisible group-hover/row:visible">
                <DropMenu />
            </span>
        </div>
    )
}
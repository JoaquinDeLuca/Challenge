import { Link } from "react-router-dom"

export default function Header() {

  return (
    <>
        <header className="bg-neutral-900 flex justify-center text-white h-[6vh]">
            <nav className="flex m-4 ">
                <ul className="flex gap-4">
                    <li>
                        <Link to='/'>Inico</Link>
                    </li>
                    <li>
                        <Link to='/listado'>Listado</Link>
                    </li>
                    <li>
                        <Link to='/contacto'>Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>

    </>
  )
}

import { Link } from "react-router-dom"
import Search from "./Search";


export default function Header(props) {

  return (
    <>
        <header className="bg-neutral-900 flex justify-center text-white h-min-[6vh]">
            <nav className="container flex flex-col gap-3 mt-4 sm:flex-row sm:mt-0 items-center justify-around">
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
                    <li>
                        <Link className="flex items-center" to='/favoritos'>Favoritos {props.favorites.length > 0  && <p className="ml-2">{props.favorites.length}🖤</p>}</Link>
                    </li>
                </ul>
                <Search />
            </nav>
        </header>

    </>
  )
}

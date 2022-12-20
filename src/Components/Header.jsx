import { Link } from "react-router-dom"
import Search from "./Search";
import favPng from '../assets/favPos.png'


export default function Header(props) {

  return (
    <>
        <header className="bg-neutral-900 flex justify-center text-white h-min-[6vh] sticky top-0 z-10">
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
                        <Link className="flex items-center" to='/favoritos'>Favoritos {props.favorites.length > 0  && <> <p className="ml-2">{props.favorites.length}</p> <img className="w-[22px] h-[22px]" src={favPng} alt="favoritos"/> </> }</Link>
                    </li>
                </ul>
                <Search />
            </nav>
        </header>

    </>
  )
}

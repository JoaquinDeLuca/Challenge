import { Link } from "react-router-dom"
import Search from "./Search";
import favPng from '../assets/favPos.png'


export default function Header(props) {
    let userlogged = props.logged

  return (
    <>
        <header className="bg-neutral-900 flex justify-center text-white sticky top-0 z-10 sm:h-[7vh]">
            <nav className="container m-2 flex flex-wrap flex-col gap-3 sm:flex-row sm:m-0 items-center  justify-around">
                <h2 className="text-2xl font-bold ">PelíFlix</h2>
                <ul className="flex gap-4">
                    <li>
                        <Link to='/'>Inico</Link>
                    </li>
                    <li>
                        <Link to='/listado'>Listado</Link>
                    </li>
                    <li>
                        <Link className="flex items-center" to='/favoritos'>Favoritos {userlogged && props.favorites.length > 0 ? <> <p className="ml-2">{props.favorites.length}</p> <img className="w-[22px] h-[22px]" src={favPng} alt="favoritos"/> </>: <></>}</Link>
                    </li>
                </ul>
               {userlogged ? <Search/> : <></>}
            </nav>
        </header>

    </>
  )
}

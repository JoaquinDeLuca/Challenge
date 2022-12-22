import { Link } from "react-router-dom"
import favNeg from '../assets/favNeg.png'


export default function Favorites(props) {


  return (
    <div className="container m-auto">
        <p className="text-2xl font-semibold mt-6">Sacción de favoritos</p>
        {props.favorites.length === 0 && <p>No tienes faviritos aún</p>}
        <div className="px-4 my-6 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-4 m-auto bg-neutral-200 p-4 rounded-lg">
                {props.favorites.map( movie => {
                    return(
                        <div key={movie.id} className="flex flex-col bg-neutral-700 rounded-lg shadow-xl">
                                <button 
                                    onClick={props.addOrRemoveFavorites}
                                    data-movieid = {movie.id}
                                    className="w-[30px] h-[30px] rounded-lg absolute bg-white m-2">
                                    <img src={favNeg} alt='favorites'/>
                                </button>
                            <div>
                                <img id='imgMovie' className="rounded-t-lg" src={movie.imgURl} alt={movie.title}/>
                                <div className="h-min-[220px] flex flex-col items-center p-3 gap-2 ">
                                    <h5 className="text-white text-lg font-black">{movie.title}</h5>
                                    <p className="text-white">{movie.overview.substring(0,110)}...</p>
                                    <Link className="bg-black text-white p-1 rounded " to={`/detalle/${movie.id}`} >Ver más</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
    </div>
  )
}

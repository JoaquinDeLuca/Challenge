import favPng from '../assets/favPos.png'
import { Link } from "react-router-dom"

export default function Card(props) {

  return (
    <div className="px-4 mt-6 mb-32 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4  gap-4 m-auto p-4 rounded-lg">
    {props.moviesList.map( movie => {
        return(
            <div key={movie.id} className="flex flex-col bg-neutral-700 rounded-lg shadow-xl"> 
                    <button 
                        onClick={props.addOrRemoveFavorites}
                        data-movieid = {movie.id}
                        className="w-[35px] h-[35px] absolute m-2">
                        <img src={favPng} alt="favorito" />
                    </button>
                <div className='flex flex-col'>
                    <img id='imgMovie' className="rounded-t-lg" src={movie.imgURl || `https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
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
  )
}

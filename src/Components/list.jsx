import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import swAlert from '@sweetalert/with-react'

export default function list() {

    const navigate = useNavigate();
    const [moviesList, setMoviesList] = useState([])
    
    useEffect(() => {
        let token = sessionStorage.getItem('token')
        if(token === null)  {
            navigate('/')
        }
    },[])


    useEffect(()=> {
        const URL = 'https://api.themoviedb.org/3/trending/all/day?api_key=18d9de0579facb89186199f3d4efd1fb&language=es-ES'
        // const ourl ='https://api.themoviedb.org/3/discover/movie?api_key=18d9de0579facb89186199f3d4efd1fb&1anguage=es-ES&page=1' 
        axios.get(URL)
            .then( response => {
                setMoviesList(response.data.results)
            })
            .catch(error => {
              swAlert({
                title:'Hubo un error inesperado, intenta nuevamente o prueba más tarde'
              })
            })
    },[setMoviesList])

    // console.log(moviesList);

    return (
        <>
            <div className="px-4 my-6 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-4 m-auto">
                {moviesList.map( movie => {
                    return(
                        <div key={movie.id} className="flex flex-col bg-slate-800 rounded-lg shadow-xl">
                            <div>
                                <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                                <div className="min-h-48 flex flex-col items-start p-3 gap-2 ">
                                    <h5 className="text-white text-lg font-black">{movie.title}</h5>
                                    <p className="text-white">{movie.overview.substring(0,110)}...</p>
                                    <Link className="bg-black text-white p-1 rounded " to={`/detalle/${movie.id}`} >Ver más</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

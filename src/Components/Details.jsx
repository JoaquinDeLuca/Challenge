import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import swAlert from '@sweetalert/with-react'


export default function Details() {
    
    useEffect(() => {
        let token = sessionStorage.getItem('token')
        if(token === null)  {
            navigate('/')
        }
    },[])

    const movieId = useParams()

    const [movie, setMovie] = useState(null)

    useEffect(()=>{
        let Url = `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=18d9de0579facb89186199f3d4efd1fb&language=es-ES`
        axios.get(Url)
            .then( response => {
                const movieData = response.data
                setMovie(movieData)
            })
            .catch(error => {
                swAlert({
                    title:'Hubo un error inesperado, intenta nuevamente o prueba más tarde'
                })
            })
    },[movieId])

  return (
    <div className="h-[82vh] md:h-min-[82vh]">
        { !movie && 
            <div class="flex h-screen w-screen items-center justify-center">
                <button type="button" class="flex items-center rounded-lg bg-black px-4 py-2 text-white" disabled>
                <svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span class="font-medium"> Cargando... </span>
                </button>
            </div>
        }
        { movie && (
            <>
            <div className="my-6 flex flex-col md:flex-row justify-center items-start">
                <div className="flex flex-col items-center">
                    <img className="w-2/5 md:w-full" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
                </div>
                <div className="md:flex flex-col md:w-3/12 mx-6">
                    <h1 className="text-3xl my-4 font-black">{movie.title}</h1>
                    <ul>
                        <li className="md:text-lg"><span className="font-bold">Fecha de lazamiendo: </span>{movie.release_date}</li>
                        <li className="md:text-lg"><span className="font-bold">Voto Promedio: </span>{movie.vote_average} ⭐</li>
                        <li className="md:text-lg"><span className="font-bold">Popularidad: </span>{movie.popularity}</li>
                        <li className="md:text-lg"><span className="font-bold">Idioma Original: </span>{movie.original_language}</li>
                    </ul>
                    <h4 className="text-lg font-bold">Descripción:</h4>
                    <p className="">{movie.overview}</p>
                </div>
            </div>
            </>
        )}
    </div>
  )
}

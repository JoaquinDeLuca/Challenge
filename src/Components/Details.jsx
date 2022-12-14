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
    // console.log(movieId)

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
    console.log(movie)

  return (
    <>
        { !movie && <p>cargando...</p>}
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
    </>
  )
}

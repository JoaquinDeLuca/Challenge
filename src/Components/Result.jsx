import { useEffect, useState  } from "react"
import axios from "axios"
import swAlert from '@sweetalert/with-react'
import { Link, useParams } from "react-router-dom"

export default function Result() {

    const keyword = useParams();
    
    const [moviesResult, setMoviesResult] = useState(null)

    useEffect(()=>{
      const URL = `https://api.themoviedb.org/3/search/movie?api_key=18d9de0579facb89186199f3d4efd1fb&language=es-ES&include_adult=false&query=${keyword.query}`
      axios.get(URL)
        .then(response => {
          const moviesRes = (response.data.results);

          if (moviesRes.length === 0 ) swAlert({title: 'No se encontraron resultados'})

          setMoviesResult(moviesRes);
        })
        .catch(error => console.log('error'))
    },[keyword.query])

    console.log(moviesResult)

    return (
      <>
        { !moviesResult && 
              <div className="flex h-screen w-screen items-center justify-center">
                  <button type="button" className="flex items-center rounded-lg bg-black px-4 py-2 text-white" disabled>
                  <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="font-medium"> Cargando... </span>
                  </button>
              </div>
        }
        {moviesResult && 

          <div className="h-min-[84vh] container flex flex-col items-start m-auto">
            <p className="text-2xl mt-6">Buscaste: <span className="font-semibold">{keyword.query}</span></p>
            {moviesResult.length === 0 && <p className="text-2xl">No se encontraron resultados</p>}
            <div className="px-4 my-6 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-4 m-auto bg-neutral-200 p-4 rounded-lg">
                  {moviesResult.map( movie => {
                      return(
                        <div key={movie.id} className="flex flex-col bg-neutral-700 rounded-lg shadow-xl">
                            <div>
                              <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                              <div className="flex flex-col items-center gap-3 p-3">
                                <h5 className="text-white text-lg font-black">{movie.title}</h5>
                                <Link className="bg-black text-white p-1 rounded " to={`/detalle/${movie.id}`} >Ver más</Link>
                              </div>
                            </div>
                        </div>
                      )
                  })}
              </div>
          </div>
        }
      </>
    )
}

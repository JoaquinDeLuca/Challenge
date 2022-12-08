import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"

export default function list() {

    const navigate = useNavigate();
    const [moviesList, setMoviesList] = useState([])
    
    useEffect(() => {
        let token = localStorage.getItem('token')
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
    },[])

    console.log(moviesList);

    return (
        <>
            <div className="px-4 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-auto">
                {moviesList.map( movie => {
                    return(
                        <div key={movie.id} className="flex flex-col" style={{border: '1px solid red'}}>
                            <div className="card">
                                <img className="" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name}/>
                                <div>
                                    <h5>{movie.name}</h5>
                                    <p>{movie.overview.substring(0,110)}...</p>
                                    <Link className="bg-slate-900 " to="/">Ver más</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

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
        axios.get(URL)
            .then( response => {
                setMoviesList(response.data.results)
            })
    },[])

    console.log(moviesList);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 m-auto container">
                <div className="flex flex-col" style={{border: '1px solid red'}}>
                    {/* card */}
                    <div className="card">
                        <img className="" src="..." alt="..."/>
                        <div>
                            <h5>Title</h5>
                            <p>Descripcion</p>
                            <Link to="/">Ver más</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

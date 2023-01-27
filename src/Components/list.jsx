import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import swAlert from '@sweetalert/with-react'
import Card from './Card'

export default function list(props) {

    const navigate = useNavigate();
    const [moviesList, setMoviesList] = useState([])
    
    useEffect(() => {
        let token = sessionStorage.getItem('token')
        if(token === null)  {
            navigate('/')
        }
    },[])


    useEffect(()=> {
        const URL ='https://api.themoviedb.org/3/discover/movie?api_key=18d9de0579facb89186199f3d4efd1fb&language=es-ES' 
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

    return (
        <>
            <Card moviesList={moviesList} addOrRemoveFavorites={props.addOrRemoveFavorites}/>
        </>
    )
}

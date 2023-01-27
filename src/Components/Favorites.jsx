import { Link } from "react-router-dom"
import favPos from '../assets/favPos.png'
import { Navigate } from "react-router-dom";
import Card from "./Card";

export default function Favorites(props) {
    let token = sessionStorage.getItem('token')
  return (
    <>
        {!token && <Navigate to="/" />}
        <div className="container m-auto">
            <p className="text-2xl font-semibold mt-6">Sección de favoritos</p>
            {props.favorites.length === 0 && <p>No tienes faviritos aún</p>}
            
            <Card moviesList={props.favorites} addOrRemoveFavorites={props.addOrRemoveFavorites}/>
        </div>
    </>
  )
}

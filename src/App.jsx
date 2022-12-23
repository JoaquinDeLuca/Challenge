import Login from './Components/Login';
import List from './Components/list';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Details from './Components/Details'
import Result from './Components/Result'
import Favorites from './Components/Favorites'
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect} from "react"  

function App() {

  
  const [favorites, setFavorites] = useState([])
  const [logged, setlogged] = useState(null)
  
  useEffect(()=>{
      let token = sessionStorage.getItem('token')
      if(token !== null){
        setlogged(true)
      }

      const favMovie = localStorage.getItem('favs')

      if(favMovie !== null){
          let fav = JSON.parse(favMovie)
          setFavorites(fav)
      }
  },[])

  const addOrRemoveFavorites = e => {

    const favMovie = localStorage.getItem('favs')

    let tempMovieFav ;
  
    if( favMovie === null ) {
      tempMovieFav = []
    } else {
      tempMovieFav = JSON.parse(favMovie)
    }

    const btn = e.currentTarget
    const parent = btn.parentElement
    const imgURl = parent.querySelector('#imgMovie').getAttribute('src')
    const title = parent.querySelector('h5').innerText
    const overview = parent.querySelector('p').innerText
    const id = btn.dataset.movieid

    const movieData = {
      imgURl,
      title,
      overview,
      id
    }

    let moviesIsInArray = tempMovieFav.find( movie => movie.id === movieData.id)

    if (!moviesIsInArray){
      tempMovieFav.push(movieData)
      localStorage.setItem('favs',JSON.stringify(tempMovieFav))
      setFavorites(tempMovieFav)
    } else {
      let removeMovie = tempMovieFav.filter( movie => movie.id !== movieData.id)
      localStorage.setItem('favs',JSON.stringify(removeMovie))
      setFavorites(removeMovie)
    }

  }

  return (
    <>
      <Header favorites={favorites} logged={logged} />
      <Routes>
        <Route path='/' element={<Login setlogged={setlogged}/>}/>
        <Route path='/listado' element={<List addOrRemoveFavorites={addOrRemoveFavorites} />} />
        <Route path='/detalle/:id' element={<Details />}/>
        <Route path='/resultados/:query' element={<Result addOrRemoveFavorites={addOrRemoveFavorites} />}/>
        <Route path='/favoritos' element={<Favorites favorites={favorites} addOrRemoveFavorites={addOrRemoveFavorites} />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

import './App.css'
import Login from './Components/Login';
import List from './Components/list';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Details from './Components/Details'
import Result from './Components/Result'
import { Route, Routes } from 'react-router-dom';

function App() {


  const addOrRemoveFavorites = e => {
    const btn = e.currentTarget
    const parent = btn.parentElement
    const imgURl = parent.querySelector('img').getAttribute('src')
    const title = parent.querySelector('h5').innerText
    const overview = parent.querySelector('p').innerText
    const movieId = btn.dataset.movieid

    const movieData = {
      imgURl,
      title,
      overview,
      movieId
    }
    console.log(movieData)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/listado' element={<List addOrRemoveFavorites={addOrRemoveFavorites} />} />
        <Route path='/detalle/:id' element={<Details />}/>
        <Route path='/resultados/:query' element={<Result/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

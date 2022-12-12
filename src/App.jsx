import './App.css'
import Login from './Components/Login';
import List from './Components/list';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Details from './Components/Details'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/listado' element={<List />} />
        <Route path='/detalle/:id' element={<Details />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

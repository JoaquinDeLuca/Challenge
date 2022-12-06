import './App.css'
import Login from './Components/Login';
import List from './Components/list';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/listado' element={<List />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

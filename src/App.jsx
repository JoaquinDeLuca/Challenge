import './App.css'
import Login from './Components/Login';
import List from './Components/list';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='flex justify-center m-10'>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/list' element={<List />} />
      </Routes>
    </div>
  )
}

export default App

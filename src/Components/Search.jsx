import swAlert from '@sweetalert/with-react'
import { useNavigate } from 'react-router-dom'


export default function Search() {
    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault()

        let keyword = e.currentTarget.keyword.value.trim()

        if(keyword.length === 0){
            swAlert({
                text: 'Tienes que escribir el nombre de alguna película'
            })
        } else if(keyword.length < 4){
            swAlert({
                text: 'Tienes que escribir mínimo 4 caracteres'
            })
        } else {
            e.currentTarget.keyword.value = ''
            navigate(`/resultados/${keyword}`)
        }

    }


  return (
    <div className="flex justify-center items-center">
        <form onSubmit={submitHandler}>
            <input className='border-2 border-slate-900 rounded-lg px-2 py-1 text-black' type='text' name="keyword" placeholder="Buscar una película" />

            <button className="m-4 border-2 border-slate-500 hover:bg-slate-700 hover:text-white rounded-lg px-2 py-1" type="submit">Buscar</button>
        </form>  
    </div>
  )
}

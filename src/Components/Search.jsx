import swAlert from '@sweetalert/with-react'


export default function Search() {

    const submitHandler = e => {
        e.preventDefault()

        let keyword = e.currentTarget.keyword.value.trim()
        console.log(keyword)

        if(keyword.length === 0){
            swAlert({
                text: 'Tienes que escribir el nombre de alguna película'
            })
        } else if(keyword.length < 4){
            swAlert({
                text: 'Tienes que escribir mínimo 4 caracteres'
            })
        } 

    }


  return (
    <div className="flex justify-center items-center mt-6">
        <form onSubmit={submitHandler}>
            <input className='border-2 border-slate-900 rounded-lg px-2 py-1' type='text' name="keyword" placeholder="Buscar una película" />

            <button className="m-4 border-2 border-slate-900 hover:bg-slate-900 hover:text-white rounded-lg px-2 py-1" type="submit">Buscar</button>
        </form>  
    </div>
  )
}

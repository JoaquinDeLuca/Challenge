import axios from "axios";
import swAlert from '@sweetalert/with-react'
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value

    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(email === '' || password === ''){
      swAlert({
        title: 'No se aceptan campos vacios',
        text: 'Ingreesa correo y contraseña',
        icon:'warning'
      })
      return;
    } 

    if(email !== '' && !regexEmail.test(email)){
      swAlert({
        title: 'Correo invalido',
        text: 'Ingresa un correo que sea valido',
        icon:'warning'
      })
      return;
    }

    if( email !== 'challenge@alkemy.org' || password !== 'react'){
      swAlert({
        title: 'Credenciales invalidas',
        text: 'Debe ingresar credenciales correctas para poder ingresar',
        icon:'warning'
      })
      return;
    }

    axios
      .post('http://challenge-react.alkemy.org', {email, password})
      .then(res => {
        swAlert({
          title: 'Has ingresado correctamente',
          icon:'success'
        }),
        console.log(res.data)
        const tokenRecibido = res.data.token
        localStorage.setItem('token', tokenRecibido)
        navigate('/listado')
      })
  }

  return (
    <>
        <form onSubmit={submitHandler} className="flex flex-col gap-5 items-center m-10">
            <h2 className="text-2xl">Iniciar Sesión</h2>

            <input type='text' name="email" placeholder="Email" />
            <input type='Password' name="password" placeholder="Password" />

            <button type="submit">Ingresar</button>
        </form>  
    </>
  )
}

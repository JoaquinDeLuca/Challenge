

export default function Login() {

  return (
    <>
        <form className="flex flex-col gap-5">
            <h2>Iniciar Sesión</h2>
            <input type='Email' name="Email" placeholder="Email" />
            <input type='Password' name="Password" placeholder="Password" />
            <button type="submit">Ingresar</button>
        </form>  
    </>
  )
}

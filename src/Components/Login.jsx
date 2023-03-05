import swAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import icon from "../assets/pelicula.png";

export default function Login(props) {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email === "" || password === "") {
      swAlert({
        title: "No se aceptan campos vacios",
        text: "Ingreesa correo y contraseña",
        icon: "warning",
      });
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      swAlert({
        title: "Correo invalido",
        text: "Ingresa un correo que sea valido",
        icon: "warning",
      });
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      swAlert({
        title: "Credenciales invalidas",
        text: "Debe ingresar credenciales correctas para poder ingresar",
        icon: "warning",
      });
      return;
    }

    // Simulating the token response
    if (email === "challenge@alkemy.org" && password === "react") {
      swAlert({
        title: "Has ingresado correctamente",
        icon: "success",
      });
      const tokenRecibido = "tu58d,XZyQ7{SHDey)$5cJFz@hy";
      sessionStorage.setItem("token", tokenRecibido);
      props.setlogged(true);
      navigate("/listado");
    }
  };

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    if (token !== null) {
      navigate("/listado");
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-[83vh]">
      <form onSubmit={submitHandler} className="m-3 flex flex-col ">
        <img className="w-1/5 m-auto" src={icon} alt="logo" />
        <h2 className="text-2xl mb-10  text-center">Pelíflix</h2>

        <input
          className="border-2 rounded-md p-1 mb-2"
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          className="border-2 rounded-md p-1"
          type="Password"
          name="password"
          placeholder="Password"
        />

        <button
          className="mt-6 p-1 border-0 bg-black text-white rounded-md s"
          type="submit"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}

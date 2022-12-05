import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function list() {

    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token === null)  {
            navigate('/')
        }
    },[])

    return (
        <div>
            soy el listado
        </div>
    )
}

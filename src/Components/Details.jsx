import { useParams } from "react-router-dom"


export default function Details() {

    const Id = useParams()
    console.log(Id)

  return (
    <div>
        Details
    </div>
  )
}

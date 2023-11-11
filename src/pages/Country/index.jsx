import { useParams,useNavigate } from "react-router-dom"


export function Country() {
    const params = useParams()
    const navigate = useNavigate()

    return (

        <>   
            <h1>Country {params.country}</h1>
            <button onClick={()=>{navigate(-1)}} >Back</button>
        </>
    )
}
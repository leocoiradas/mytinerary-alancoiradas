import { useParams } from "react-router-dom";
import { useEffect } from "react";

function CityDetails (){
    const {id} = useParams()
    useEffect(() => {

    }, [])
    return (
        <div>
            <h2>{id}</h2>
        </div>
    )
}
export default CityDetails
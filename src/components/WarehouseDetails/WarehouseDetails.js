import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./WarehouseDetails.scss";

function WarehouseDetails() {
    const [warehouseDetails, setWarehouseDetails] = useState();

    const {id} = useParams();

    useEffect (()=>{
        axios
            .get(`http://localhost:8080/warehouses/${id}`)
            .then((response)=>{
                console.log(response.data);
                const selectedWarehouse = response.data;
                setWarehouseDetails(selectedWarehouse);
            })
    }, [])

    if(!warehouseDetails) {
        return <p>Loading.....</p>
    }

    return (
        <div></div>
    )
}

export default WarehouseDetails;
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./WarehouseDetails.scss";
import BackArrowIcon from "../../assets/images/arrow_back-24px.svg";

function WarehouseDetails() {
    const [warehouseDetails, setWarehouseDetails] = useState();
    const [width, setWidth] = useState(window.innerWidth);

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

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    if(!warehouseDetails) {
        return <p>Loading.....</p>
    }

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    return (
        <>
            <div className="warehouse-details">
                <div className="warehouse-details__left">
                    <img className="warehouse-details__icon" src={BackArrowIcon} alt="Back arrow"/>
                    <h1 className="warehouse-details__title">{warehouseDetails.city}</h1>
                </div>
                <button className="warehouse-details__edit-button">{width<767 ? null : "Edit"}</button>
            </div>
            <div className="inventory-list">
                <div className="inventory-list__address-container">
                    <p className="">Warehouse address:</p>
                    <p>{warehouseDetails.address}, {warehouseDetails.city}, {warehouseDetails.country}</p>
                </div>
                <div>
                    <p>Contact name:</p>
                    <p>{warehouseDetails.contact.name}</p>
                    <p>{warehouseDetails.contact.position}</p>
                </div>
                <div>
                    <p>Contact information:</p>
                    <p>{warehouseDetails.contact.phone}</p>
                    <p>{warehouseDetails.contact.email}</p>
                </div>
            </div>
        </>
    )
}

export default WarehouseDetails;
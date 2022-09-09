import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./WarehouseDetails.scss";
import BackArrowIcon from "../../assets/images/arrow_back-24px.svg";

function WarehouseDetails() {
    //State for selected warehouse data
    const [warehouseDetails, setWarehouseDetails] = useState();

    //State to track size of browser window for styling
    const [width, setWidth] = useState(window.innerWidth);

    const {id} = useParams();

    //Retrieve data from API
    useEffect (()=>{
        axios
            .get(`http://localhost:8080/warehouses/${id}`)
            .then((response)=>{
                console.log(response.data);
                const selectedWarehouse = response.data;
                setWarehouseDetails(selectedWarehouse);
            })
    }, [])

    //useEffect to track the size of browser window
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    if(!warehouseDetails) {
        return <p>Loading.....</p>
    }

    //Function that tracks window resizing
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    return (
        <>
            <div className="warehouse-details__top">
                <div className="warehouse-details__left">
                    <img className="warehouse-details__icon" src={BackArrowIcon} alt="Back arrow"/>
                    <h1 className="warehouse-details__title">{warehouseDetails.city}</h1>
                </div>
                <button className="warehouse-details__edit-button">{width<767 ? null : "Edit"}</button>
            </div>
            <div className="warehouse-details__bottom">
                <div className="warehouse-details__address">
                    <h4 className="warehouse-details__label">Warehouse address:</h4>
                    <p className="warehouse-details__content">
                        {warehouseDetails.address}, 
                        {width>=767 ? null : ` ${warehouseDetails.city}, ${warehouseDetails.country}`}
                    </p>
                    {width<767 ? null : <p className="warehouse-details__content">{warehouseDetails.city}, {warehouseDetails.country}</p>}
                </div>
                <div className="warehouse-details__contacts">
                    <div>
                        <h4 className="warehouse-details__label">Contact name:</h4>
                        <p className="warehouse-details__content">{warehouseDetails.contact.name}</p>
                        <p className="warehouse-details__content">{warehouseDetails.contact.position}</p>
                    </div>
                    <div>
                        <h4 className="warehouse-details__label">Contact information:</h4>
                        <p className="warehouse-details__content">{warehouseDetails.contact.phone}</p>
                        <p className="warehouse-details__content">{warehouseDetails.contact.email}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WarehouseDetails;
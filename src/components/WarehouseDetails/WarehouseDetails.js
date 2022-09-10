import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
            .get(`http://localhost:8080/warehouses/warehouse/${id}`)
            .then((response)=>{
                const selectedWarehouse = response.data;
                setWarehouseDetails(selectedWarehouse);
            })
    }, [])

    //Function that tracks window resizing
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

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

    


    return (
        <>
            <div className="warehouse-details__top">
                <div className="warehouse-details__left">
                    <Link to={`/warehouses`} className="warehouse-details__icon"><img  src={BackArrowIcon} alt="Back arrow"/></Link>
                    <h1 className="warehouse-details__title">{warehouseDetails.city}</h1>
                </div>
                <Link to={`/warehouses/edit/${id}`}><button className="warehouse-details__edit-button">{width<767 ? null : "Edit"}</button></Link>
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
                {/* <div className="warehouse-details__contacts"> */}
                    <div className="warehouse-details__contacts-left">
                        <h4 className="warehouse-details__label">Contact name:</h4>
                        <p className="warehouse-details__content">{warehouseDetails.contact.name}</p>
                        <p className="warehouse-details__content">{warehouseDetails.contact.position}</p>
                    </div>
                    <div className="warehouse-details__contacts-right">
                        <h4 className="warehouse-details__label">Contact information:</h4>
                        <p className="warehouse-details__content">{warehouseDetails.contact.phone}</p>
                        <p className="warehouse-details__content">{warehouseDetails.contact.email}</p>
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default WarehouseDetails;
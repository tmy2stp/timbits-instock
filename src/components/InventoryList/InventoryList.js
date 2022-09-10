import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./InventoryList.scss";

function InventoryList() {

    const [inventory, setInventory] = useState();

    useEffect(()=>{
        axios
            .get("http://localhost:8080/inventories")
            .then((response)=>{
                setInventory(response.data);
            })
    }, [])

    if(!inventory) {
        <p>Loading...</p>
    }

    return (
        <>
            <div className="inventory-list__top">
                <div>
                    <h1 className="inventory-list__title">Inventory</h1>
                </div>
                <div className="inventory-list__right">
                    {/* <form> */}
                    <input
                        name="search"
                        type="text"
                        placeholder="Search..."
                        className={`inventory-list__input`}
                    />
                    {/* </form> */}
                    <Link 
                        to={`/inventory/add-new`} 
                        className="inventory-list__link">
                            <div className="inventory-list__edit-button">
                                + Add new item 
                            </div>
                    </Link>
                </div>   
            </div>
            <div></div>
        </>
    )
}

export default InventoryList
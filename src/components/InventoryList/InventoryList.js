import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InventoryCard from "../InventoryCard/InventoryCard";
import "./InventoryList.scss";
import SortIcon from "../../assets/images/sort-24px.svg";

function InventoryList() {

    const [inventory, setInventory] = useState();

    const [reload, setReload] = useState(1);

    useEffect(()=>{
        axios
            .get("http://localhost:8080/inventories")
            .then((response)=>{
                setInventory(response.data);
            })
    }, [reload])

    if(!inventory) {
        return <p>Loading...</p>
    }

    return (
        <>
            <div className="inventory-list__top">
                <div>
                    <h1 className="inventory-list__title">Inventory</h1>
                </div>
                <div className="inventory-list__right">
                    <form className="inventory-list__form">
                    <input
                        name="search"
                        type="text"
                        placeholder="Search..."
                        className={`inventory-list__input`}
                    />
                    </form>
                    <Link 
                        to={`/inventory/add-new`} 
                        className="inventory-list__link">
                            <div className="button--primary inventory-list__add-button">
                                + Add new item 
                            </div>
                    </Link>
                </div>   
            </div>
            <div className="inventory-list__names names">
                <div className="names__column names__column names__item">
                    <h4 className="names__title">Inventory item</h4>
                    <img className="names__sort-icon" src={SortIcon} alt="Sort Icon" />
                </div>
                <div className="names__column names__column names__category">
                    <h4 className="names__title">Category</h4>
                    <img className="names__sort-icon" src={SortIcon} alt="Sort Icon" />
                </div>
                <div className="names__column names__column names__status">
                    <h4 className="names__title">Status</h4>
                    <img className="names__sort-icon" src={SortIcon} alt="Sort Icon" />
                </div>
                <div className="names__column names__column names__qty">
                    <h4 className="names__title">Qty</h4>
                    <img className="names__sort-icon" src={SortIcon} alt="Sort Icon" />
                </div>
                <div className="names__column names__column names__warehouse">
                    <h4 className="names__title">Warehouse</h4>
                    <img className="names__sort-icon" src={SortIcon} alt="Sort Icon" />
                </div>
                <div className="names__column names__column names__actions">
                    <h4 className="names__title">Actions</h4>
                </div>
            </div>
            <div className="inventory-list__bottom">
                {inventory.map((inventory, i)=>{
                    return <InventoryCard 
                        key={inventory.id} 
                        i ={i} 
                        id={inventory.id} 
                        inventory = {inventory} 
                        setReload={setReload} 
                        reload={reload}/>
                    })}
            </div>
        </>
    )
}

export default InventoryList
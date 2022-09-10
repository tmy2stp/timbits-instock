import "./InventoryItem.scss";
import DeleteIcon from "../../assets/images/delete_outline-24px.svg";
import EditIcon from "../../assets/images/edit-24px.svg";
import ArrowRight from "../../assets/images/chevron_right-24px.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function InventoryItem({inventory, i, id}) {
    //Delete button functionality is now commented out, because the component for it hasn't been created yet

    const [ clickDelete , setClickDelete ] = useState(false);

    const handleClick = () =>{
        setClickDelete(true);
    }

    return (
        <div className={`card ${i===0 ? "card__first" : null}`}>
            {/* {clickDelete === true ? <DeleteComponent />: null} */}
            <div className="card__key-pair card__item">
                <h4 className="card__label">Inventory item</h4>
                    <Link to={`/inventory/${id}`} className="card__item-name card__title-container">
                        <p className="card__content card__title ">{inventory.itemName}</p>
                        <img src={ArrowRight} alt="Right arrow" className="card__title-icon"/>
                    </Link>
            </div>
            <div className="card__key-pair card__right card__status">
                <h4 className="card__label card__status-label">Status</h4>
                <p className={`card__content ${inventory.status === "In Stock" ? "card__in-stock" : "card__out-of-stock"}`}>
                    {inventory.status}
                </p>
            </div>
            <div className="card__key-pair card__category">
                <h4 className="card__label">Category</h4>
                <p className="card__content">{inventory.category}</p>
            </div>
            <div className="card__key-pair card__right card__qty">
                <h4 className="card__label">Qty</h4>
                <p className="card__content">{inventory.quantity}</p>
            </div>
            <div className="card__bottom">
                <div onClick={handleClick} className="card__delete-container"><img className="card__icon" src={DeleteIcon} alt="Delete icon" /></div>
                <Link to={`/warehouses/edit/${id}`}><img className="card__icon" src={EditIcon} alt="Edit icon"/></Link>
            </div>
        </div>
    )
}

export default InventoryItem;
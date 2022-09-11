import "./InventoryItem.scss";
import DeleteIcon from "../../assets/images/delete_outline-24px.svg";
import EditIcon from "../../assets/images/edit-24px.svg";
import ArrowRight from "../../assets/images/chevron_right-24px.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteModal from "../../components/DeleteModal/DeleteInventoryItem";


function InventoryItem({inventory, i, id}) {

    const [ clickDelete , setClickDelete ] = useState(false);

    const handleClick = () =>{
        setClickDelete(true);
    }

    return (
        <div className={`item ${i===0 ? "item" : null}`}>
            {clickDelete === true ? <DeleteModal />: null}
            <div className="item__key-pair item__item">
                <h4 className="item__label">Inventory item</h4>
                    <Link to={`/inventory/${id}`} className="item__item-name item__title-container">
                        <p className="item__content item__title ">{inventory.itemName}</p>
                        <img src={ArrowRight} alt="Right arrow" className="item__title-icon"/>
                    </Link>
            </div>
            <div className="item__key-pair item__right item__status">
                <h4 className="item__label item__status-label">Status</h4>
                <p className={`item__content ${inventory.status === "In Stock" ? "item__in-stock" : "item__out-of-stock"}`}>
                    {inventory.status}
                </p>
            </div>
            <div className="item__key-pair item__category">
                <h4 className="item__label">Category</h4>
                <p className="item__content">{inventory.category}</p>
            </div>
            <div className="item__key-pair item__right item__qty">
                <h4 className="item__label">Qty</h4>
                <p className="item__content">{inventory.quantity}</p>
            </div>
            <div className="item__bottom">
                <div onClick={handleClick} className="item__delete-container"><img className="item__icon" src={DeleteIcon} alt="Delete icon" /></div>
                <Link to={`/warehouses/edit/${id}`}><img className="item__icon" src={EditIcon} alt="Edit icon"/></Link>
            </div>
        </div>
    )
}

export default InventoryItem;
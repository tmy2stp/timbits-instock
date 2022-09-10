import "./InventoryItem.scss";
import DeleteIcon from "../../assets/images/delete_outline-24px.svg";
import EditIcon from "../../assets/images/edit-24px.svg";
import ArrowRight from "../../assets/images/chevron_right-24px.svg";
import { Link } from "react-router-dom";

function InventoryItem({inventory}) {
  return (
    <div className="inventory-list-container__card card">
        <div className="card__key-pair card__item">
            <h4 className="card__label">Inventory item</h4>
                <Link to="/inventory/:id" className="card__item-name card__title-container">
                    <p className="card__content card__title ">{inventory.itemName}</p>
                    <img src={ArrowRight} className="card__title-icon"/>
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
            <img className="card__icon" src={DeleteIcon} alt="Delete icon" />
            <img className="card__icon" src={EditIcon} alt="Edit icon"/>
        </div>
    </div>
  )
}

export default InventoryItem;
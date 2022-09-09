import "./InventoryItem.scss";
import DeleteIcon from "../../assets/images/delete_outline-24px.svg";
import EditIcon from "../../assets/images/edit-24px.svg";
import ArrowRight from "../../assets/images/chevron_right-24px.svg";

function InventoryItem({inventory}) {
  return (
    <div>
        <div>
            <div>
                <div>
                    <h4>Inventory item</h4>
                    <div>
                        <p>{inventory.itemName}</p>
                        <img src={ArrowRight}/>
                    </div>
                </div>
                <div>
                    <h4>Category</h4>
                    <p>{inventory.category}</p>
                </div>
            </div>
            <div>
                <div>
                    <h4>Status</h4>
                    <p>{inventory.status}</p>
                </div>
                <div>
                    <h4>Qty</h4>
                    <p>{inventory.quantity}</p>
                </div>
            </div>
        </div>
        <div>
            <img src={DeleteIcon} alt="Delete icon" />
            <img src={EditIcon} alt="Edit icon"/>
        </div>
        
    </div>
  )
}

export default InventoryItem;
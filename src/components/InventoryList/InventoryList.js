import { Link } from "react-router-dom";
import "./InventoryList.scss";

function InventoryList() {
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
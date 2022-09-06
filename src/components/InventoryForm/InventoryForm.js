import backArrow from "../../assets/images/arrow_back-24px.svg"
import "./InventoryForm.scss"

function InventoryForm({formType}) {
  return (
    <div className="inventory-form">
        <header className="inventory-form__header">  
            <img className="inventory-form__back" src={backArrow} alt="arrow to navigate back"/>              
            <h1 className="inventory-from__title">{formType} Inventory Item</h1>
        </header>
        <form className="inventory-form__form">
            <div></div>
            <div>InventoryForm</div>
            <footer>
                <button>Save</button>
                <button>Cancel</button>
            </footer>
        </form>
    </div>




  )
}

export default InventoryForm

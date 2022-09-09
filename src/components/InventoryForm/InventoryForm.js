import backArrow from "../../assets/images/arrow_back-24px.svg";
import "./InventoryForm.scss";

function InventoryForm({ formType }) {
  return (
    <div className="inventory-form">
      <header className="inventory-form__header">
        <img
          className="inventory-form__back"
          src={backArrow}
          alt="arrow to navigate back"
        />
        <h1 className="inventory-form__title">{formType} Inventory Item</h1>
      </header>
      <form className="inventory-form__form">
        <div className="inventory-form__section inventory-form__section--left">
          <h2 className="inventory-form__subtitle">Item Details</h2>
          <label className="inventory-form__label">
            Item Name
            <input
              className="inventory-form__input"
              type="text"
              placeholder="Item Name"
            />
          </label>
          <label className="inventory-form__label">
            Description
            <textarea
              className="inventory-form__input inventory-form__input--textarea"
              placeholder="Please enter a brief item description..."
            ></textarea>
          </label>
          <label className="inventory-form__label">
            Category
            <select 
              className="inventory-form__input inventory-form__input--select">
              <option classname="inventory-form__default" selected value="Please select">Please Select</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </label>
        </div>
        <div className="inventory-form__section">
          <h2 className="inventory-form__subtitle">Item Availability</h2>
          <label className="inventory-form__label">
            Status
            <div>
              <input
                className="inventory-form__radio"
                type="radio"
                id="inStock"
                name="inStock"
                value="In Stock"
              />
              <label for="inStock" className="inventory-form__radio-label">In Stock</label>
              <input
                className="inventory-form__radio"
                type="radio"
                id="inStock"
                name="inStock"
                value="In Stock"
              />
              <label for="inStock" className="inventory-form__radio-label">Out of stock</label>
            </div>
          </label>
          <label className="inventory-form__label">
            Quantity
            <input
              className="inventory-form__input inventory-form__input--quantity"
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              placeholder="0"
            />
          </label>
          <label className="inventory-form__label">
            Warehouse
            <select className="inventory-form__input inventory-form__input--select">
              <option classname="inventory-form__default" selected value="Please select">Please Select</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </label>
        </div>
        <footer className="inventory-form__footer">
          <button 
            className="inventory-form__button inventory-form__button--cancel">
            Cancel
          </button>
          <button 
            className="inventory-form__button inventory-form__button--before">
            + Add Item
          </button>
        </footer>
      </form>
    </div>
  );
}

export default InventoryForm;

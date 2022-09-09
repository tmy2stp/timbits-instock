import "./NewWarehouse.scss";
import backArrow from "../../assets/images/arrow_back-24px.svg";

function NewWarehouse() {
  return (
    <div className="inventory-form">
      <header className="inventory-form__header">
        <img
          className="inventory-form__back"
          src={backArrow}
          alt="arrow to navigate back"
        />
        <h1 className="inventory-form__title"> Add New Warehouse</h1>
      </header>
      <form className="inventory-form__form">
        <div className="inventory-form__section inventory-form__section--left">
          <h2 className="inventory-form__subtitle">Warehouse Details</h2>
          <label className="inventory-form__label">
            Warehouse Name
            <input
              className="inventory-form__input"
              type="text"
              placeholder="Warehouse Name"
            />
          </label>
          <label className="inventory-form__label">
            Street Address
            <input
              className="inventory-form__input"
              type="text"
              placeholder="Street Address"
            />
          </label>
          <label className="inventory-form__label">
            City
            <input
              className="inventory-form__input"
              type="text"
              placeholder="City"
            />
          </label>
          <label className="inventory-form__label">
            Country
            <input
              className="inventory-form__input"
              type="text"
              placeholder="Country"
            />
          </label>
        </div>
        <div className="inventory-form__section">
          <h2 className="inventory-form__subtitle">Contact Details</h2>
          <label className="inventory-form__label">
            Contact Name
            <input
              className="inventory-form__input"
              type="text"
              placeholder="Contact Name"
            />
          </label>
          <label className="inventory-form__label">
            Position
            <input
              className="inventory-form__input"
              type="text"
              placeholder="Position"
            />
          </label>
          <label className="inventory-form__label">
            Phone Number
            <input
              className="inventory-form__input"
              type="text"
              placeholder="Phone Number"
            />
          </label>
          <label className="inventory-form__label">
            Email
            <input
              className="inventory-form__input"
              type="text"
              placeholder="Email"
            />
          </label>
        </div>
        <footer className="inventory-form__footer">
          <button className="inventory-form__button inventory-form__button--cancel">
            Cancel
          </button>
          <button className="inventory-form__button inventory-form__button--before">
            + Add Warehouse
          </button>
        </footer>
      </form>
    </div>
  );
}

export default NewWarehouse;

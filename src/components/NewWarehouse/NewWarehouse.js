import "./NewWarehouse.scss";
import backArrow from "../../assets/images/arrow_back-24px.svg";
import axios from "axios";
import { useState } from "react";
const API_URL = "http://localhost:8080";

function NewWarehouse() {
  // const [visibleItem, setVisibleItem] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [managerName, setManagerName] = useState("");
  const [managerPosition, setManagerPosition] = useState("");
  const [managerPhone, setManagerPhone] = useState("");
  const [managerEmail, setManagerEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeContactName = (event) => {
    setManagerName(event.target.value);
  };

  const handleChangePosition = (event) => {
    setManagerPosition(event.target.value);
  };

  const handleChangePhone = (event) => {
    setManagerPhone(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setManagerEmail(event.target.value);
  };

  // created form validation
  const isFormValid = () => {
    if (
      !name ||
      !address ||
      !city ||
      !managerPhone ||
      !country ||
      !managerName ||
      !managerPosition ||
      !managerEmail
    ) {
      return false;
    }
    return true;
  };

  const newWarehouse = {
    name: name,
    address: address,
    city: city,
    country: country,
    contact: {
      managerName: managerName,
      managerPosition: managerPosition,
      managerPhone: managerPhone,
      managerEmail: managerEmail,
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      axios
        .post(API_URL + "/warehouses", newWarehouse)
        .then((response) => {
          console.log(response.data);
          // setVisibleItem("message");
          setName("");
          setAddress("");
          setCity("");
          setCountry("");
          setManagerPhone("");
          setManagerName("");
          setManagerPosition("");
          setManagerEmail("");
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    } else {
      setIsError(true);
    }
  };
  console.log(
    managerEmail,
    managerPosition,
    managerName,
    country,
    managerPhone,
    city,
    address,
    name
  );

  return (
    <div className="newWarehouse-form">
      <header className="newWarehouse-form__header">
        <img
          className="newWarehouse-form__back"
          src={backArrow}
          alt="arrow to navigate back"
        />
        <h1 className="newWarehouse-form__title"> Add New Warehouse</h1>
      </header>
      <form onSubmit={handleSubmit} className="newWarehouse-form__form">
        <div className="newWarehouse-form__section newWarehouse-form__section--left">
          <h2 className="newWarehouse-form__subtitle">Warehouse Details</h2>
          <label className="newWarehouse-form__label">
            Warehouse Name
            <input
              className="newWarehouse-form__input"
              type="text"
              placeholder="Warehouse Name"
              onChange={handleChangeName}
              value={name}
            />
          </label>
          <label className="newWarehouse-form__label">
            Street Address
            <input
              className="newWarehouse-form__input"
              type="text"
              placeholder="Street Address"
              onChange={handleChangeAddress}
              value={address}
            />
          </label>
          <label className="newWarehouse-form__label">
            City
            <input
              className="newWarehouse-form__input"
              type="text"
              placeholder="City"
              onChange={handleChangeCity}
              value={city}
            />
          </label>
          <label className="newWarehouse-form__label">
            Country
            <input
              className="newWarehouse-form__input"
              type="text"
              placeholder="Country"
              onChange={handleChangeCountry}
              value={country}
            />
          </label>
        </div>
        <div className="newWarehouse-form__section">
          <h2 className="newWarehouse-form__subtitle">Contact Details</h2>
          <label className="newWarehouse-form__label">
            Contact Name
            <input
              className="newWarehouse-form__input"
              type="text"
              placeholder="Contact Name"
              onChange={handleChangeContactName}
              value={managerName}
            />
          </label>
          <label className="newWarehouse-form__label">
            Position
            <input
              className="newWarehouse-form__input"
              type="text"
              placeholder="Position"
              onChange={handleChangePosition}
              value={managerPosition}
            />
          </label>
          <label className="newWarehouse-form__label">
            Phone Number
            <input
              className="newWarehouse-form__input"
              type="text"
              placeholder="Phone Number"
              onChange={handleChangePhone}
              value={managerPhone}
            />
          </label>
          <label className="newWarehouse-form__label">
            Email
            <input
              className="newWarehouse-form__input"
              type="text"
              placeholder="Email"
              onChange={handleChangeEmail}
              value={managerEmail}
            />
          </label>
        </div>
        <footer className="newWarehouse-form__footer">
          <button className="newWarehouse-form__button newWarehouse-form__button--cancel">
            Cancel
          </button>
          <button className="newWarehouse-form__button newWarehouse-form__button--before">
            + Add Warehouse
          </button>
        </footer>
      </form>
    </div>
  );
}

export default NewWarehouse;

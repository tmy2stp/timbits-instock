import "./NewWarehouse.scss";
import backArrow from "../../assets/images/arrow_back-24px.svg";
import errorImg from "../../assets/images/error-24px.svg";
import axios from "axios";
import { Link } from "react-router-dom";
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

  //create states to dynamically generate error messages
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [managerNameError, setManagerNameError] = useState(false);
  const [managerPositionError, setManagerPositionError] = useState(false);
  const [managerPhoneError, setManagerPhoneError] = useState(false);
  const [managerEmailError, setManagerEmailError] = useState(false);

  //create state generate success message
  const [success, setSuccess] = useState(false);
  const [isError, setIsError] = useState("");

  const handleChangeName = (event) => {
    if (nameError) {
      setNameError(false);
    }
    if (isError) {
      setIsError(false);
    }
    setName(event.target.value);
  };

  const handleChangeAddress = (event) => {
    if (addressError) {
      setAddressError(false);
    }
    if (isError) {
      setIsError(false);
    }

    setAddress(event.target.value);
  };

  const handleChangeCity = (event) => {
    if (cityError) {
      setCityError(false);
    }
    if (isError) {
      setIsError(false);
    }

    setCity(event.target.value);
  };

  const handleChangeCountry = (event) => {
    if (countryError) {
      setCountryError(false);
    }
    if (isError) {
      setIsError(false);
    }

    setCountry(event.target.value);
  };

  const handleChangeContactName = (event) => {
    if (managerNameError) {
      setManagerNameError(false);
    }
    if (isError) {
      setIsError(false);
    }

    setManagerName(event.target.value);
  };

  const handleChangePosition = (event) => {
    if (managerPositionError) {
      setManagerPositionError(false);
    }
    if (isError) {
      setIsError(false);
    }

    setManagerPosition(event.target.value);
  };

  const handleChangePhone = (event) => {
    if (managerPhoneError) {
      setManagerPhoneError(false);
    }
    if (isError) {
      setIsError(false);
    }

    setManagerPhone(event.target.value);
  };

  const handleChangeEmail = (event) => {
    if (managerEmailError) {
      setManagerEmailError(false);
    }
    if (isError) {
      setIsError(false);
    }

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
      name: managerName,
      position: managerPosition,
      phone: managerPhone,
      email: managerEmail,
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
          setSuccess(true);
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
          setIsError(error.response.data.error);
          console.log(error.response.data.error);
        });
    } else {
      setNameError(true);
      setAddressError(true);
      setCityError(true);
      setCountryError(true);
      setManagerNameError(true);
      setManagerPhoneError(true);
      setManagerEmailError(true);
      setManagerPositionError(true);
    }
  };

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
              className={`newWarehouse-form__input ${
                nameError ? "newWarehouse-form__input--error" : ""
              }`}
              type="text"
              placeholder="Warehouse Name"
              onChange={handleChangeName}
              value={name}
            />
            {nameError && (
              <p className="error">
                <img src={errorImg} alt="error icon" className="error__icon" />
                This field is required
              </p>
            )}
          </label>
          <label className="newWarehouse-form__label">
            Street Address
            <input
              className={`newWarehouse-form__input ${
                addressError ? "newWarehouse-form__input--error" : ""
              }`}
              type="text"
              placeholder="Street Address"
              onChange={handleChangeAddress}
              value={address}
            />
            {addressError && (
              <p className="error">
                <img src={errorImg} alt="error icon" className="error__icon" />
                This field is required
              </p>
            )}
          </label>
          <label className="newWarehouse-form__label">
            City
            <input
              className={`newWarehouse-form__input ${
                cityError ? "newWarehouse-form__input--error" : ""
              }`}
              type="text"
              placeholder="City"
              onChange={handleChangeCity}
              value={city}
            />
            {cityError && (
              <p className="error">
                <img src={errorImg} alt="error icon" className="error__icon" />
                This field is required
              </p>
            )}
          </label>
          <label className="newWarehouse-form__label">
            Country
            <input
              className={`newWarehouse-form__input ${
                countryError ? "newWarehouse-form__input--error" : ""
              }`}
              type="text"
              placeholder="Country"
              onChange={handleChangeCountry}
              value={country}
            />
            {countryError && (
              <p className="error">
                <img src={errorImg} alt="error icon" className="error__icon" />
                This field is required
              </p>
            )}
          </label>
        </div>
        <div className="newWarehouse-form__section">
          <h2 className="newWarehouse-form__subtitle">Contact Details</h2>
          <label className="newWarehouse-form__label">
            Contact Name
            <input
              className={`newWarehouse-form__input ${
                managerNameError ? "newWarehouse-form__input--error" : ""
              }`}
              type="text"
              placeholder="Contact Name"
              onChange={handleChangeContactName}
              value={managerName}
            />
            {managerNameError && (
              <p className="error">
                <img src={errorImg} alt="error icon" className="error__icon" />
                This field is required
              </p>
            )}
          </label>
          <label className="newWarehouse-form__label">
            Position
            <input
              className={`newWarehouse-form__input ${
                managerPositionError ? "newWarehouse-form__input--error" : ""
              }`}
              type="text"
              placeholder="Position"
              onChange={handleChangePosition}
              value={managerPosition}
            />
            {managerPositionError && (
              <p className="error">
                <img src={errorImg} alt="error icon" className="error__icon" />
                This field is required
              </p>
            )}
          </label>
          <label className="newWarehouse-form__label">
            Phone Number
            <input
              className={`newWarehouse-form__input ${
                managerPhoneError ? "newWarehouse-form__input--error" : ""
              }`}
              type="tel"
              placeholder="Phone Number"
              onChange={handleChangePhone}
              value={managerPhone}
            />
            {managerPhoneError && (
              <p className="error">
                <img src={errorImg} alt="error icon" className="error__icon" />
                This field is required
              </p>
            )}
          </label>
          <label className="newWarehouse-form__label">
            Email
            <input
              className={`newWarehouse-form__input ${
                managerEmailError ? "newWarehouse-form__input--error" : ""
              }`}
              type="text"
              placeholder="Email"
              onChange={handleChangeEmail}
              value={managerEmail}
            />
            {managerEmailError && (
              <p className="error">
                <img src={errorImg} alt="error icon" className="error__icon" />
                This field is required
              </p>
            )}
          </label>
        </div>
        <footer className="newWarehouse-form__footer">
          <p className="newWarehouse-form__error">{isError}</p>
          {success && (
            <p className="newWarehouse-form__error newWarehouse-form__error--success">
              Warehouse Added
            </p>
          )}
          <Link
            to="/"
            className="newWarehouse-form__button newWarehouse-form__button--cancel"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="newWarehouse-form__button newWarehouse-form__button--before"
          >
            + Add Warehouse
          </button>
        </footer>
      </form>
    </div>
  );
}

export default NewWarehouse;

import "./WarehouseList.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import deleteIcon from "../../assets/images/delete_outline-24px.svg";
import editIcon from "../../assets/images/edit-24px.svg";
import chevronRight from "../../assets/images/chevron_right-24px.svg";
import { Link } from 'react-router-dom';

function WarehouseList() {
  const [allWarehouses, setAllWarehouses] = useState([]);
  const URL = "http://localhost:8080/warehouses";

  useEffect(() => {
    axios.get(URL).then((response) => {
      console.log(response.data);
      setAllWarehouses(response.data);
    });
  }, []);

  return (
    <div className="warehouse">
      <header className="warehouse__header">
        <h1>Warehouses</h1>
        <form action="">
          <input
            type="text"
            placeholder="Search...."
            className="warehouse__header-input"
          />
        </form>

        <button className="warehouse__header-button inventory-form__button--before">
          + Add New Warehouse
        </button>
      </header>
      {allWarehouses.map((warehouse) => {
        return (
          <div className="warehouse__card">
            <div className="warehouse__card-item">
              <h4 className="warehouse__card-title warehouse__card-title--name">
                WAREHOUSE
              </h4>
              <Link to={"/"} className="warehouse__card-link warehouse__card-info">
                {warehouse.name} 
                {<img className="warehouse__card-arrow" src={chevronRight} alt="right arrow" />}
              </Link>
            </div>

            <div className="warehouse__card-item">
              <h4 className="warehouse__card-title">CONTACT NAME</h4>
              <p className="warehouse__card-info">{warehouse.contact.name}</p>
            </div>

            <div className="warehouse__card-item">
              <h4 className="warehouse__card-title">ADDRESS</h4>
              <p className="warehouse__card-info">
                {warehouse.address}, {warehouse.city}, {warehouse.country}
              </p>
            </div>

            <div className="warehouse__card-item">
              <h4 className="warehouse__card-title">CONTACT INFORMATION</h4>
              <p className="warehouse__card-info">{warehouse.contact.phone}</p>
              <p className="warehouse__card-info">{warehouse.contact.email}</p>
            </div>
            <div className="warehouse__card-icons">
              <img src={deleteIcon} alt="delete button" />
              <img src={editIcon} alt="edit button" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WarehouseList;

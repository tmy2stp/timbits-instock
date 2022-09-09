import "./WarehouseList.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import deleteIcon from '../../assets/images/delete_outline-24px.svg'
import editIcon from  '../../assets/images/edit-24px.svg'

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
            <h5>WAREHOUSE</h5>
            <h5>{warehouse.name}</h5>
            <h5>ADDRESS</h5>
            <h5>{warehouse.address}</h5>
            <h5>CONTACT NAME</h5>
            <h5>{warehouse.contact.name}</h5>
            <h5>CONTACT INFORMATION</h5>
            <div>
              <h5>{warehouse.contact.phone}</h5>
              <h5>{warehouse.contact.email}</h5>
            </div>
            <div>
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

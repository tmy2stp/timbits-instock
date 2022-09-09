import "./WarehouseList.scss";
import axios from "axios";
import { useState, useEffect } from "react";

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
          <input type="text" placeholder="Search...." className="warehouse__header-input" />
        </form>

        <button className="warehouse__header-button inventory-form__button--before">
          + Add New Warehouse
        </button>
      </header>

      {allWarehouses.map((warehouse) => {
        return <h2>{warehouse.name}</h2>;
      })}
    </div>
  );
}

export default WarehouseList;

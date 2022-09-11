import "./WarehouseList.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import deleteIcon from "../../assets/images/delete_outline-24px.svg";
import editIcon from "../../assets/images/edit-24px.svg";
import chevronRight from "../../assets/images/chevron_right-24px.svg";
import { Link } from "react-router-dom";
import sortArrows from "../../assets/images/sort-24px.svg";
import DeleteWarehouse from "../DeleteModal/DeleteWarehouse";

function WarehouseList() {
  const [allWarehouses, setAllWarehouses] = useState([]);
  // state to conditionally open the modal
  const [isOpen, setIsOpen] = useState(false);
  // state to reload component after delete
  const [reload, setReload] = useState(1);
  const URL = "http://localhost:8080/warehouses";

  function handleClick() {
    setIsOpen(true);
  }

  // this event handler is passed down as a prop to the modal
  function handleCloseModal() {
    setIsOpen(false);
    setReload(reload + 1)
  }

  useEffect(() => {
    axios.get(URL).then((response) => {
      console.log(response.data);
      setAllWarehouses(response.data);
    });
  }, [reload]);

  return (
    <div className="warehouse">
      <header className="warehouse__header">
        <h1>Warehouses</h1>
        <div className="warehouse__header-formbtn">
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
        </div>
      </header>
      <div className="warehouse__subheaders">
        <div className="warehouse__subheader">
          <h4 className="warehouse__subheader-text">
            WAREHOUSE{" "}
            <img
              className="warehouse__subheader-arrows"
              src={sortArrows}
              alt="sorting arrows"
            />
          </h4>
        </div>
        <div className="warehouse__subheader">
          <h4 className="warehouse__subheader-text">
            ADDRESS{" "}
            <img
              className="warehouse__subheader-arrows"
              src={sortArrows}
              alt="sorting arrows"
            />
          </h4>
        </div>
        <div className="warehouse__subheader">
          <h4 className="warehouse__subheader-text">
            CONTACT NAME{" "}
            <img
              className="warehouse__subheader-arrows"
              src={sortArrows}
              alt="sorting arrows"
            />
          </h4>
        </div>
        <div className="warehouse__subheader warehouse__subheader--info">
          <h4 className="warehouse__subheader-text ">
            CONTACT INFORMATION{" "}
            <img
              className="warehouse__subheader-arrows"
              src={sortArrows}
              alt="sorting arrows"
            />
          </h4>
        </div>
        <div className="warehouse__subheader warehouse__subheader-icons">
          <h4 className="warehouse__subheader-text">ACTIONS</h4>
        </div>
      </div>
      {allWarehouses.map((warehouse) => {
        return (
          <div key={warehouse.id} className="warehouse__card">
               {isOpen && (
              <DeleteWarehouse
                handleCloseModal={handleCloseModal}
                warehouseName={warehouse.name}
                warehouseId={warehouse.id}
              />
            )}
            <div className="warehouse__card-item warehouse__card-item--warehouse">
              <h4 className="warehouse__card-title warehouse__card-title--name">
                WAREHOUSE
              </h4>
              <Link
                to={`/warehouses/warehouse/${warehouse.id}`}
                className="warehouse__card-link warehouse__card-info"
              >
                {warehouse.name}
                {
                  <img
                    className="warehouse__card-arrow"
                    src={chevronRight}
                    alt="right arrow"
                  />
                }
              </Link>
            </div>

            <div className="warehouse__card-item warehouse__card-item--contact">
              <h4 className="warehouse__card-title">CONTACT NAME</h4>
              <p className="warehouse__card-info">{warehouse.contact.name}</p>
            </div>

            <div className="warehouse__card-item warehouse__card-item--address">
              <h4 className="warehouse__card-title ">ADDRESS</h4>
              <p className="warehouse__card-info">
                {warehouse.address}, {warehouse.city}, {warehouse.country}
              </p>
            </div>

            <div className="warehouse__card-item warehouse__card-item--info">
              <h4 className="warehouse__card-title">CONTACT INFORMATION</h4>
              <p className="warehouse__card-info">{warehouse.contact.phone}</p>
              <p className="warehouse__card-info">{warehouse.contact.email}</p>
            </div>
            <div className="warehouse__card-icons warehouse__card-item--icons">
              <img
                onClick={handleClick}
                className="warehouse__card-icon"
                src={deleteIcon}
                alt="delete button"
              />
              <Link to={`/warehouses/edit/${warehouse.id}`}>
                <img
                  className="warehouse__card-icon"
                  src={editIcon}
                  alt="edit button"
                />
              </Link>
            </div>
         
          </div>
        );
      })}
    </div>
  );
}

export default WarehouseList;

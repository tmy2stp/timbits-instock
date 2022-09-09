import "./WarehouseInventoryList.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import InventoryItem from "../InventoryItem/InventoryItem";

function WarehouseInventoryList() {
  //State for selected warehouse's inventory data
  const [warehouseInventory, setWarehouseInventory] = useState();

  const {id} = useParams();

  //Retrieve data from API
  useEffect (()=>{
    axios
        .get(`http://localhost:8080/inventories/warehouse/${id}`)
        .then((response)=>{
            const inventories = response.data;
            console.log(inventories);
            setWarehouseInventory(inventories);
        })
  }, [])

  if(!warehouseInventory) {
    return <p>Loading.....</p>
  }

  return (
    <div>
      {warehouseInventory.map((inventory)=>{
          return <InventoryItem key={inventory.id} inventory = {inventory}/>
      })}
    </div>
  )
}

export default WarehouseInventoryList
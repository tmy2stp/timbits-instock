import InventoryFormPage from "./pages/InventoryFormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer.js';
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage";
import DeleteModal from "./components/DeleteModal/DeleteWarehouse";
import WarehouseFormPage from "./pages/WarehouseFormPage";
import InventoryList from "./components/InventoryList/InventoryList";
import InventoryDetailsPage from "./pages/InventoryDetailsPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <main className="background">
            <div className="background__card">
              <Routes>

              <Route path="/"/>
              <Route path="/inventory" element={<InventoryList />}/>
              <Route path="/warehouses"/>
              <Route path="/warehouses/warehouse/:id" element={<WarehouseDetailsPage />}/>
              <Route path="/inventory/inventory/:id" element={<InventoryDetailsPage />} /> 
              <Route path="/inventory/add-new" element={<InventoryFormPage formType={"Add New"} />}/>
              <Route path="/inventory/edit/:id" element={<InventoryFormPage formType={"Edit"}/>} />
              <Route path="/warehouses/add-new" element={<WarehouseFormPage formType={"Add New"}/>}/>
              <Route path="/warehouses/edit/:id" element={<WarehouseFormPage formType={"Edit"} />}/>                   
              </Routes> 
          </div> 
          </main> 
          <Footer />
      </BrowserRouter> 

    </>
  )
}

export default App;

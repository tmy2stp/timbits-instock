import InventoryFormPage from "./pages/InventoryFormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import NewWarehouse from './components/NewWarehouse/NewWarehouse';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer.js';
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage";
import InventoryList from "./components/InventoryList/InventoryList";

function App() {
  return(
    <>

      <BrowserRouter>
        <Header />
          <main className="background">
            <div className="background__card">
              <Routes>
              <Route path="/inventory" element={<InventoryList />}/>
              <Route path="/warehouses"/>
              <Route path="/inventory/add-new" element={<InventoryFormPage formType={"Add New"} />}/>
              <Route path="/warehouses/warehouse/:id" element={<WarehouseDetailsPage />}/>
              <Route path="/inventory/edit/:id" element={<InventoryFormPage formType={"Edit"}/>} />
              <Route path="/warehouses/add-new" element={<NewWarehouse />}/>
              {/* <Route path="/" element={}/>
    
              
              <Route path="/warehouses/add-new" element={}/>
              <Route path="/warehouses/edit/:id" element={}/>              
              <Route path="/inventory/inventory/:id" element={}/>
              } */}
              </Routes>
            </div>
          </main>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

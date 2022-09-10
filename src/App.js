import InventoryFormPage from "./pages/InventoryFormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer.js';
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage";
import WarehouseListPage from './pages/WarehouseListPage';

import WarehouseFormPage from "./pages/WarehouseFormPage";

import InventoryList from "./components/InventoryList/InventoryList";


function App() {
  return(
    <>

      <BrowserRouter>
        <Header />
          <main className="background">
            <div className="background__card">
              <Routes>

              <Route path="/"/>
              <Route path="/inventory"/>

              <Route path="/inventory" element={<InventoryList />}/>

              <Route path="/warehouses" element={<WarehouseListPage/>}/>
              <Route path="/warehouses/warehouse/:id" element={<WarehouseDetailsPage />}/>
              <Route path="/inventory/inventory/:id"/>
              <Route path="/inventory/add-new" element={<InventoryFormPage formType={"Add New"} />}/>
              <Route path="/inventory/edit/:id" element={<InventoryFormPage formType={"Edit"}/>} />
              <Route path="/warehouses/add-new" element={<WarehouseFormPage formType={"Add New"}/>}/>
              <Route path="/warehouses/edit/:id" element={<WarehouseFormPage formType={"Edit"} />}/>              

              {/* <Route path="/" element={}/>            
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

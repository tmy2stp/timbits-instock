import InventoryFormPage from "./pages/InventoryFormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage";

function App() {
  return(
    <>
        {/* <h1>Temporary heading for testing purposes. Feel free to remove it.</h1> */}
        <BrowserRouter>
          <header className='app-header'>This is the temporary header. will be replaced</header>
          <main className="background">
            <div className="background__card">
              <Routes>
              <Route path="/inventory/add-new" element={<InventoryFormPage formType="Add New"/>}/>
              {/*
              {/* <Route path="/" element={}/>
              <Route path="/warehouses" element={}/>
              <Route path="/warehouses/warehouse/:id" element={<WarehouseDetailsPage />}/>
              <Route path="/warehouses/edit/:id" element={}/>
              <Route path="/warehouses/add-new" element={}/>
              <Route path="/inventory" element={}/>
              <Route path="/inventory/:id" element={}/>
              <Route path="/inventory/edit/:id" element={} */}
              </Routes>
            </div>
          </main>
      </BrowserRouter>
    </>
  );
}

export default App;

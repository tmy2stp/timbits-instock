import InventoryForm from './components/InventoryForm/InventoryForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer.js';
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage";

function App() {
  return(
    <>
      <BrowserRouter>
        <Header />
          <main className="background">
            <div className="background__card">
              <Routes>
              <Route path="/inventory"/>
              <Route path="/warehouses"/>
              <Route path="/inventory/add-new" element={<InventoryForm formType={"Add New"} />}/>
              <Route path="/warehouses/warehouse/:id" element={<WarehouseDetailsPage />}/>
              {/* <Route path="/" element={}/>
              
              <Route path="/warehouses/edit/:id" element={}/>
              <Route path="/warehouses/add-new" element={}/>
              
              <Route path="/inventory/:id" element={}/>
              <Route path="/inventory/:id/edit" element={}/>
              <Route path="/inventory/add-new" element={}/> */}
              </Routes>
            </div>
          </main>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

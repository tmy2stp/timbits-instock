import InventoryForm from './components/InventoryForm/InventoryForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage";
import WarehouseListPage from './pages/WarehouseListPage';

function App() {
  return(
    <>
    
        {/* <h1>Temporary heading for testing purposes. Feel free to remove it.</h1> */}
        <BrowserRouter>
          <header className='app-header'>This is the temporary header. will be replaced</header>
          <main className="background">
            <div className="background__card">
              <Routes>
              <Route path="/inventory/add-new" element={<InventoryForm formType={"Add New"} />}/>
              <Route path="/warehouses/warehouse/:id" element={<WarehouseDetailsPage />}/>
              <Route path="/warehouses" element={<WarehouseListPage />}/>
              {/* <Route path="/" element={}/>
              
              <Route path="/warehouses/edit/:id" element={}/>
              <Route path="/warehouses/add-new" element={}/>
              <Route path="/inventory" element={}/>
              <Route path="/inventory/:id" element={}/>
              <Route path="/inventory/:id/edit" element={}/>
              <Route path="/inventory/add-new" element={}/> */}
              </Routes>
            </div>
          </main>
      </BrowserRouter>
    </>
  );
}

export default App;

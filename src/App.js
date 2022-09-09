import InventoryForm from './components/InventoryForm/InventoryForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import NewWarehouse from './components/NewWarehouse/NewWarehouse';

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
              <Route path="/warehouses/add-new" element={<NewWarehouse/>}/>
              {/* <Route path="/" element={}/>
              <Route path="/warehouses" element={}/>
              <Route path="/warehouses/:id" element={}/>
              <Route path="/warehouses/:id/edit" element={}/>
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

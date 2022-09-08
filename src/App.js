import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import WarehouseDetails from "./pages/WarehouseDetails";


function App() {
  return(
    <>
    <header>This is the temporary header. will be replaced</header>
    <main className="background">
      <div className="background__card">
        <h1>Temporary heading for testing purposes. Feel free to remove it.</h1>
        <BrowserRouter>
        <Routes>
          <Route path="/warehouses/:id" element={<WarehouseDetails />}/>
          {/* <Route path="/" element={}/>
          <Route path="/warehouses" element={}/>
          <Route path="/warehouses/:id/edit" element={}/>
          <Route path="/warehouses/add-new" element={}/>
          <Route path="/inventory" element={}/>
          <Route path="/inventory/:id" element={}/>
          <Route path="/inventory/:id/edit" element={}/>
          <Route path="/inventory/add-new" element={}/> */}
        </Routes>
      </BrowserRouter>
      </div>
    </main>
    </>
  );
}

export default App;

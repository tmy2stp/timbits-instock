import InventoryForm from './components/InventoryForm/InventoryForm';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return(
    <>
      <InventoryForm formType={"Add New"}/>
    </>

    // // <BrowserRouter>
    // //   <Routes>
    //     {/* <Route path="/" element={}/>
    //     <Route path="/warehouses" element={}/>
    //     <Route path="/warehouses/:id" element={}/>
    //     <Route path="/warehouses/:id/edit" element={}/>
    //     <Route path="/warehouses/add-new" element={}/>
    //     <Route path="/inventory" element={}/>
    //     <Route path="/inventory/:id" element={}/>
    //     <Route path="/inventory/:id/edit" element={}/>
    //     <Route path="/inventory/add-new" element={}/> */}
    // //   </Routes>
    // // </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";


function App() {
  return(
    <>
    <BrowserRouter>
    <Header />
    <main className="background">
      <div className="background__card">
        <h1>Temporary heading for testing purposes. Feel free to remove it.</h1>
        <Routes>
        <Route path="/" />
        <Route path="/warehouses" />
        <Route path="/inventory" />
          {/* <Route path="/" element={}/>

          <Route path="/warehouses/:id" element={}/>
          <Route path="/warehouses/:id/edit" element={}/>
          <Route path="/warehouses/add-new" element={}/>
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

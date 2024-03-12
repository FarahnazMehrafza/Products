import React from "react";
import ReactDOM from "reactDom";
import "./index.css";
import  { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import EditProduct from "../Pages/EditProduct";
import AddProduct from "../Pages/AddProduct";
import Favorites from "../Pages/Favorites";


export default function App() {
return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<layout/>} />
      <Route path="/ Home" element={<Home/>} />
      <Route path="/ Favorites" element={<Favorites/>} />
      <Route path="/ EditProduct" element={<EditProduct/>} />
      <Route path="/ AddProduct" element={<AddProduct/>} />
    </Routes>
  </BrowserRouter>
 );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
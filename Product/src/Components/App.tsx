import { BrowserRouter, Route } from "react-router-dom";

import NavBar  from "./Navbar";
import  Home  from "./pages/Home";
import  Favorites  from "./pages/Favorites";
import  EditProduct  from "./pages/ EditProduct";
import  AddProduct  from "./pages/ AddProduct";


export function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="../Pages/Favorites">
            <Favorites/>
          </Route>
          <Route path="../Pages/AddProduct">
            <AddProduct/>
          </Route>
          <Route path="../Pages/EditProduct">
            <EditProduct/>
          </Route>
        
      </BrowserRouter>
   
  );
};

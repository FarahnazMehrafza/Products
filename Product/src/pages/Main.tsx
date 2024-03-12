import ReactDOM from 'react-dom';
import { Routes, Route, Router } from 'react-router-dom';
import createBrowserRouter from 'react-router-dom';
import Home from './Home';
import AddProduct from './AddProduct';
import ProductDetails from './ProductDetails';
import Favorites from './Favorites';

Export const App = () => {
  return (
    <Router>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<AddProduct />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="favourites" element={<Favorites />} />
        </Route>
      </Router>
    </Router>
  );
};



import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import ContactsView from './views/ContactsView';
import ProductsView from './views/ProductsView';
import ShoppingCartView from './views/ShoppingCartView';
import ProductsDetailsView from './views/ProductsDetailsView';
import { FeaturedProductsContext, GridProductsContext, ProductContext } from './contexts/contexts';


// Needs Function for fetching products
// Needs Contexts x3 - Outer layer!!


const App: React.FC = () => {
  
  return (
    <>
      <BrowserRouter> 
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="*" element={<NotFoundView />} />
              <Route path="/contacts" element={<ContactsView />} />
              <Route path="/shoppingcart" element={<ShoppingCartView />} />
              <Route path="/products" element={<ProductsView />} />
              <Route path="/products/:productName" element={<ProductsDetailsView />} />
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

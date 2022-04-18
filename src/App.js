import React from "react";
import {Provider} from 'react-redux';
import store from "./store";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import EditProduct from "./components/EditProduct";
import Header from "./components/Header";




function App() {
  return (
    <Router>
      <Provider store={store}>
      <Header/>

      <div className="container">
        <Routes>
          <Route exact path="/" element={<Products/>}/>
          <Route exact path="/products/new" element={<NewProduct/>}/>
          <Route exact path="/products/edit/:id" element={<EditProduct/>}/>
        </Routes>
      </div>
      </Provider>
    </Router>
  );
}

export default App;

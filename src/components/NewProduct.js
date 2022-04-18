import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

// redux actions
import { addProductAction } from "../actions/productActions.js";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);

  const addProduct = (product) => {
    dispatch(addProductAction(product));
  };

  const submitNewProduct = (e) => {
    e.preventDefault();
    if (name.trim === '' || price <= 0) {
        return;
    }
    addProduct({name, price});
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2>Add new product</h2>

            <form onSubmit={(e) => submitNewProduct(e)}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                />
              </div>

              <div className="form-group">
                <label>Product Price</label>
                <input
                  name="price"
                  type="text"
                  className="form-control"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  placeholder="Product Name"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block "
              >
                Add product
              </button>
            </form>
            {loading ? <p>Loading</p> : null}
            {error ? <p className="alert alert-danger p2 mt-4 text-center">There was an error :(</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;

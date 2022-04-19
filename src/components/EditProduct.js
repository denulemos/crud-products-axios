import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startProductEdit } from "../actions/productActions";
import {useNavigate} from 'react-router-dom';

const EditProduct = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
  });

  const editProduct = useSelector((state) => state.products.editProduct);

  useEffect(() => {
    setProduct(editProduct);
  }, [editProduct]);

  // read form
  const onChangeForm = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const { name, price, id } = product;

  const submitEditProduct = (e) => {
    e.preventDefault();
    dispatch(startProductEdit(product));
    navigate('/');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2>Edit product</h2>

            <form onSubmit={submitEditProduct}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  value={name}
                  name="name"
                  type="text"
                  onChange={onChangeForm}
                  className="form-control"
                  placeholder="Product Name"
                />
              </div>

              <div className="form-group">
                <label>Product Price</label>
                <input
                  value={price}
                  name="price"
                  type="text"
                  onChange={onChangeForm}
                  className="form-control"
                  placeholder="Product Name"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block "
              >
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;

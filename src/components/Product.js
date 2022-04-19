import React from "react";
import { Link, useNavigate } from "react-router-dom";

// redux
import { useDispatch } from "react-redux";
import { deleteProductAction, productEdit } from "../actions/productActions";

import Swal from "sweetalert2";

export const Product = (props) => {
  const { name, price, id } = props;
  const dispatch = useDispatch();

  //confirm delete
  const confirmDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
          // go to action
        dispatch(deleteProductAction(id));
      }
    });
  };

  const navigate = useNavigate();

  const redirectEdit = (product) => {
      dispatch(productEdit(product));
      navigate(`/products/edit/${product.id}`);
  }

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">${price}</span>
      </td>
      <td className="actions">
        <button onClick={() => redirectEdit(props)} type="button" className="btn btn-primary mr-3">
          Edit
        </button>
        <button
          onClick={() => confirmDelete(id)}
          type="button"
          className="btn btn-danger"
        >
          Delete{" "}
        </button>
      </td>
    </tr>
  );
};

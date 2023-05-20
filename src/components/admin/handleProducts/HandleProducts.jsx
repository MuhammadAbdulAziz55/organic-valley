import "./handleProducts.css";
import useFetch from "../../../hooks/useFetch";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../spinner/Spinner";

const HandleProducts = () => {
  const [list, setList] = useState();

  const { data, loading } = useFetch(
    "https://organic-valley-server.onrender.com/api/products/"
  );

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://organic-valley-server.onrender.com/api/products/${id}`
      );
      const updatedData = list.filter((item) => item._id !== id);
      setList(updatedData);
    } catch (err) {}
  };
  return (
    <div className="ptContainer">
      <table className="productTable">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Weight</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        {loading ? (
          <Spinner />
        ) : (
          list &&
          list.map((pr) => (
            <tbody key={pr._id}>
              <tr>
                <td>{pr.title}</td>
                <td>{pr.weight}</td>
                <td>$ {pr.price}</td>
                <td>
                  <span>
                    <img
                      src="https://i.ibb.co/DCxv3wP/Group-307.png"
                      alt=""
                      className="editIcon"
                    />
                  </span>
                  <span>
                    <img
                      src="https://i.ibb.co/LgFT1X7/Group-33150.png"
                      alt=""
                      className="deleteIcon"
                      onClick={() => handleDelete(pr._id)}
                    />
                  </span>
                </td>
              </tr>
            </tbody>
          ))
        )}
      </table>
    </div>
  );
};

export default HandleProducts;

import Navbar from "../../components/navbar/Navbar";
import "./orders.css";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthProvider";
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import Spinner2 from "../../components/spinner/Spinner2";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState();

  const { data, loading, error } = useFetch(
    `https://organic-valley-server.onrender.com/api/order?email=${user?.email}`
  );
  // console.log(user?.email);

  useEffect(() => {
    setOrders(data);
  }, [data]);

  const handleOrderDelete = async (id) => {
    try {
      await axios.delete(
        `https://organic-valley-server.onrender.com/api/order/${id}`
      );
      const updatedData = orders.filter((item) => item._id !== id);
      console.log(updatedData, "update data");
      alert("Are you sure? you want to delete this order");
      setOrders(updatedData);
      window.location.reload();
    } catch (err) {}
  };
  return (
    <div>
      <Navbar />
      <div className="ordersContainer">
        <h1 className="ordersTitle">Your Orders</h1>
        <table className="ordersTable">
          <thead>
            <tr className="ordersTrTitle">
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Date</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <Spinner2 />
            ) : (
              data &&
              data.map((order, index) => (
                <React.Fragment key={order._id}>
                  <tr>
                    <td>{order._id}</td>
                    <td>{order.productName}</td>
                    <td>{order.createdAt.slice(0, 10)}</td>
                    <td>${order.productPrice}</td>
                    <td>
                      <span
                        onClick={() => handleOrderDelete(order._id)}
                        className="deleteButton"
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                </React.Fragment>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;

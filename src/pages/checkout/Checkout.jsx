import { useState } from "react";
import "./checkout.css";

import Navbar from "../../components/navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import OrderDetails from "../../components/orderDetails/OrderDetails";
import axios from "axios";
import { toast } from "react-hot-toast";

const Checkout = () => {
  const [open, setOpen] = useState(false);

  const { title, price, photos, _id } = useLoaderData();
  console.log(title, price, photos);

  const createOrder = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/order/create",
        data
      );

      toast.success("Your order has been successfully placed");
      setTimeout(() => {
        window.location.reload();
      }, 1000);

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      <div className="coContainer">
        <div className="left">
          <table className="table">
            <tbody>
              <tr className="trTitle">
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </tbody>
            <tbody>
              <tr className="tr">
                <td>
                  <div className="imgContainer">
                    <img src={photos} alt="" className="img" />
                  </div>
                </td>
                <td>
                  <span className="name">{title}</span>
                </td>
                <td>
                  <span className="price">${price}</span>
                </td>
                <td>
                  <span className="quantity">1</span>
                </td>
                <td>
                  <span className="total">${price}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2 class="cartTitle">Cart Total</h2>

            <div className="totalText">
              <b class="totalTextTitle">Discount:</b> $0
            </div>
            <div className="totalText">
              <b class="totalTextTitle">Total:</b> ${price}
            </div>

            <button onClick={() => setOpen(true)} className="button">
              CHECKOUT NOW!
            </button>
          </div>
        </div>
        {open && (
          <OrderDetails
            setOpen={setOpen}
            productId={_id}
            productPrice={price}
            createOrder={createOrder}
            productName={title}
            productImg={photos}
          />
        )}
      </div>
    </>
  );
};

export default Checkout;

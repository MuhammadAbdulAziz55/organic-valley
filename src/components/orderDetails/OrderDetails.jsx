import { useState } from "react";
import "./orderDetails.css";

const OrderDetails = ({
  setOpen,
  createOrder,
  productPrice,
  productName,
  productImg,
  productId,
}) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = ({}) => {
    createOrder({
      productId,
      productName,
      productImg,
      productPrice,
      customer,
      email,
      phone,
      address,
    });
  };

  return (
    <div className="odContainer">
      <div className="odWrapper">
        <button onClick={() => setOpen(false)} className="closeButton">
          X
        </button>
        <h1 class="odTitle">You will pay $12 after delivery</h1>

        <div className="odItem">
          <label className="odLabel">Name Surname</label>
          <input
            placeholder="Omar"
            type="text"
            className="odInput"
            required
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className="odItem">
          <label className="odLabel">Phone Number</label>
          <input
            placeholder="+880 16 1893 5859"
            type="text"
            className="odInput"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="odItem">
          <label className="odLabel">Email</label>
          <input
            placeholder="omar@gmail.com"
            type="email"
            className="odInput"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* <div className="odItem">
          <label className="odLabel">Address</label>
          <input
            placeholder="address"
            type="text"
            className="odInput"
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div> */}
        <div className="odItem">
          <label className="odLabelAddress">Address</label>
          <textarea
            rows={4}
            placeholder="Elton St. 505 NY"
            type="text"
            className="textarea"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button onClick={handleClick} className="odButton">
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;

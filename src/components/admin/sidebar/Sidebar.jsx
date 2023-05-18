import {
  BsFillGridFill,
  BsFillPenFill,
  BsFillPlusCircleFill,
} from "react-icons/bs";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="adminLogo">ORGANIC VALLEY</span>
      </div>
      <div className="bottom">
        <ul>
          <Link
            to={"/admin/manage-products"}
            style={{ textDecoration: "none" }}
          >
            <li className="liItem">
              <BsFillGridFill />
              <span className="liItemText">Manage Product</span>
            </li>
          </Link>
          <Link to={"/admin/add-product"} style={{ textDecoration: "none" }}>
            <li className="liItem">
              <BsFillPlusCircleFill />
              <span className="liItemText">Add Product</span>
            </li>
          </Link>
          <li className="liItem">
            <BsFillPenFill />
            <span className="liItemText">Edit Product</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

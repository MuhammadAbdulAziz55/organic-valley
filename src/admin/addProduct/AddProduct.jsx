import HandleAddProduct from "../../components/admin/handleAddProduct/HandleAddProduct";
import Sidebar from "../../components/admin/sidebar/Sidebar";
import "./addProduct.css";

const AddProduct = () => {
  return (
    <div className="addProduct">
      <Sidebar />
      <div class="addProContainer">
        <h2 className="addProTitle">Add Product</h2>

        <HandleAddProduct />
      </div>
    </div>
  );
};

export default AddProduct;

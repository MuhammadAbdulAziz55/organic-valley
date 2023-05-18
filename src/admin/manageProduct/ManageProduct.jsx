import HandleProducts from "../../components/admin/handleProducts/HandleProducts";
import Sidebar from "../../components/admin/sidebar/Sidebar";
import "./manageProduct.css";

const ManageProduct = () => {
  return (
    <div className="managePd">
      <Sidebar />
      <div class="managePdContainer">
        <h1 className="mTitle">Manage Products</h1>
        <HandleProducts />
      </div>
    </div>
  );
};

export default ManageProduct;

import Sidebar from "../../components/admin/sidebar/Sidebar";
import "./adminHome.css";

const AdminHome = () => {
  return (
    <div className="adminHome">
      <Sidebar />
      <div className="homeContainer">
        <div className="welcomeText">Welcome to Organic Valley Admin Panel</div>
      </div>
    </div>
  );
};

export default AdminHome;

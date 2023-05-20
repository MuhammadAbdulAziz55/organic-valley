import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home/Home";
import Orders from "./pages/orders/Orders";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AdminHome from "./admin/home/AdminHome";
import Checkout from "./pages/checkout/Checkout";
import { Toaster } from "react-hot-toast";
import ManageProduct from "./admin/manageProduct/ManageProduct";
import AddProduct from "./admin/addProduct/AddProduct";
import PrivateRoute from "./routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/admin",
        element: (
          <PrivateRoute>
            <AdminHome />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://organic-valley-server.onrender.com/api/products/product/${params.id}`
          ),
      },
      {
        path: "/admin/manage-products",
        element: (
          <PrivateRoute>
            <ManageProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/add-product",
        element: (
          <PrivateRoute>
            {" "}
            <AddProduct />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;

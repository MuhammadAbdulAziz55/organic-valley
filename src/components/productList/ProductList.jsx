import useFetch from "../../hooks/useFetch";
import ProductsCard from "../productsCard/ProductsCard";
import Spinner from "../spinner/Spinner";
import Spinner2 from "../spinner/Spinner2";

import "./productList.css";

const ProductList = () => {
  const { data, loading, error } = useFetch(
    "https://organic-valley-server.onrender.com/api/products/"
  );
  console.log(data);
  return (
    <div className="productList">
      <h1 className="plTitle">
        <span>ORGANIC VEGETABLE</span>
      </h1>
      {loading ? (
        <Spinner2 />
      ) : (
        <div className="container">
          {data &&
            data.map((product) => (
              <ProductsCard key={product._id} product={product} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;

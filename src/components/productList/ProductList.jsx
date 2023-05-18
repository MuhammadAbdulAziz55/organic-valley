import useFetch from "../../hooks/useFetch";
import ProductsCard from "../productsCard/ProductsCard";
import Spinner from "../spinner/Spinner";
import "./productList.css";

const ProductList = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/products/"
  );
  console.log(data);
  return (
    <div className="productList">
      <h1 className="plTitle">
        <span>ORGANIC VEGETABLE</span>
      </h1>
      {loading ? (
        <Spinner />
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

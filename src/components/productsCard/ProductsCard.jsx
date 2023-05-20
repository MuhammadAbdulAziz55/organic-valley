import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./productsCard.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  return (
    <>
      <div className="prList">
        <div className="infoContainer">
          <img src={product.photos} alt="" className="prListImg" />

          <div className="prInfo">
            <h3 className="prTitle">{product.title}</h3>
            <p class="prWeight">{product.weight}</p>
            <p class="prPrice">${product.price}</p>
          </div>
        </div>
        <div className="iconContainer">
          <div className="icon">
            <Link
              title="Buy Now!"
              to={`/checkout/${product._id}`}
              style={{ color: "inherit" }}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;

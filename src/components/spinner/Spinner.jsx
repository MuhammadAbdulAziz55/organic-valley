import { BallTriangle } from "react-loader-spinner";
import "./spinner.css";

const Spinner = () => {
  return (
    <div className="spinner">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;

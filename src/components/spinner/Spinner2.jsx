import React, { useState } from "react";
import { DotLoader } from "react-spinners";

const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "teal",
  alignItems: "center",
  justifyContent: "center",
  left: "50%",
  position: "absolute",
  textAlign: "center",
  top: "50%",
};
const Spinner2 = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <DotLoader
        color="green"
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner2;

import { useState } from "react";
import "./handleAddProduct.css";
import axios from "axios";
import { toast } from "react-hot-toast";

const HandleAddProduct = () => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dorhvzwr0/image/upload",
        data
      );
      // console.log(uploadRes.data);
      const { url } = uploadRes.data;
      const newProduct = { ...info, photos: url };
      // console.log(newProduct);
      await axios.post("http://localhost:5000/api/products/", newProduct);
      toast.success("Your product has been successfully created");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="paContainer">
        <form className="paForm">
          <div className="uploadItem">
            <h4>Add Photo</h4>
            <label htmlFor="file" className="paLabelPhoto ">
              <span>
                <img
                  alt=""
                  src="https://i.ibb.co/4N0vRdW/cloud-upload-outline-1.png"
                  className="uploadIcon"
                />
              </span>
              <span className="uploadText">Upload Photo</span>
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="formItem">
            <label className="paLabel">Add Price</label>
            <input
              className="paInput"
              type="number"
              id="price"
              placeholder="Enter price "
              onChange={handleChange}
            />
          </div>
          <div className="formItem">
            <label className="paLabel">Product Name</label>
            <input
              className="paInput"
              type="text"
              id="title"
              placeholder="Enter Name "
              onChange={handleChange}
            />
          </div>

          <div className="formItem">
            <label className="paLabel">Weight</label>
            <input
              className="paInput"
              type="text"
              id="weight"
              placeholder="Enter weight "
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <button className="saveButton" onClick={handleClick}>
        Save
      </button>
    </>
  );
};

export default HandleAddProduct;

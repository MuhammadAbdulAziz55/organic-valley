import { useContext, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./register.css";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

import { Link } from "react-router-dom";
const Register = () => {
  const { CreateAccount, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(fullName, password, confirmPassword);

    if (password.length < 6) {
      toast.error("Your password should be at least 6 characters long");
    }

    if (password !== confirmPassword) {
      toast.error("Your password didn't match. Please try again");
    }
    if (password === confirmPassword) {
      return CreateAccount(email, password)
        .then((res) => {
          const user = res.user;
          console.log("user", user);
          toast.success("Your account successfully created");

          form.reset();
          setError("");
          handleUpdateUserProfile(fullName);
        })
        .catch((err) => {
          console.error(err);
          setError(err.message);
        });
    }
  };

  const handleUpdateUserProfile = (fullName) => {
    const profile = {
      displayName: fullName,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2 className="form-title">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              placeholder="Full Name"
              type="text"
              name="fullName"
              className=""
              required
            />
          </div>
          <div className="form-control">
            <input
              placeholder="Email"
              type="email"
              name="email"
              className=""
              required
            />
          </div>
          <div className="form-control">
            <input
              placeholder="Password"
              type="password"
              name="password"
              className=""
              required
            />
          </div>
          <div className="form-control">
            <input
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              className=""
              required
            />
          </div>
          <div className="remember-forget">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>
            <Link className="link" to="">
              Forgot Password?
            </Link>
          </div>
          {/* show error massage */}
          <p className="text-red-600 text-center text-sm pt-6">{error}</p>

          <input type="submit" value="Register" className="btn-submit" />
        </form>
        <p className="textLink">
          Already have an account?
          <Link to="/login">
            <span className="link">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

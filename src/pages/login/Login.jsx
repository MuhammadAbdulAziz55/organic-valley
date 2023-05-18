import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./login.css";
import { FaLock } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
const Login = () => {
  const { loginWithGoogle, login } = useContext(AuthContext);
  const [error, setError] = useState("");
  // console.log(error);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);

        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.massage);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <span className="form-icon">
              <MdMail />
            </span>
            <input
              placeholder="Username or Email"
              type="email"
              name="email"
              className=""
              required
            />
          </div>
          <div className="form-control">
            <span className="form-icon">
              <FaLock />
            </span>
            <input
              placeholder="Password"
              type="password"
              name="password"
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

          <input type="submit" value="Login" className="btn-submit" />
        </form>
        <p className="textLink">
          Don't have an account?
          <Link to="/register">
            <span className="link">create a New Account</span>
          </Link>
        </p>
      </div>
      {/* .................horizontal line divider division................. */}
      <div className="hLineContainer">
        <p className="hLineText ">
          <span className="hlSpan">or</span>
        </p>
      </div>

      {/* ................login with google division................ */}

      <div className="loginContainer">
        <button onClick={handleGoogleLogin} className="loginButton ">
          <img
            alt=""
            src="https://i.ibb.co/6X5FQzw/google.png"
            className="LoginIcon"
          />
          Continue with Google
        </button>
      </div>

      {/* ................login with facebook division................ */}
      <div className="facebook loginContainer ">
        <button className="loginButton">
          <img
            alt=""
            src="https://i.ibb.co/h9sQXBk/fb.png"
            className="LoginIcon"
          />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;

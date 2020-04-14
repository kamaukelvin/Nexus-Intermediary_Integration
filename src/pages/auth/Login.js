import React, { useState } from "react";
import bg from "../../assets/images/bg/bg-7.jpg";
import Logo from "../../assets/images/nexus_logo.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/widgets/loader";
//  React Notification
import { NotificationManager } from "react-notifications";

//  Validation
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// token
import { setUserSession } from "../../utils/Common";

const Login = (props) => {
  // states

  const [user, setUser] = useState({
    email: "",
    password: "",
    showPassword: false,
    rememberMe: false,
    loading: false,
  });

  const [error, setError] = useState("");

  //  destructure
  const { email, password } = user;
  const { history } = props;

  // methods

  const handleChange = (evt) => {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });

    console.log(user);
  };
  const toggleRememberMe=()=>{
    setUser({...user,
      rememberMe:!user.rememberMe
    })
  }

  const togglePassword=()=>{
    setUser({...user,
      showPassword:!user.showPassword
    })

  }
console.log("this is the stet of login"+JSON.stringify(user))
  //  Login in user

  const login = () => {
    console.log("login functiom")
    const body = {
      email,
      password,
    };

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        "https://yotemarket.co.ke/kev/api/login.php",
        JSON.stringify(body),
        config
      )
      .then((res) => {
        setUser({ loading: false });
        setUserSession(res.data.jwt);
        history.push("/dashboard");
      })
      // errors are printed out in the console
      .catch((error) => {
        console.log("we are at the error and error is" + JSON.stringify(error));
        setError(error.message);
        NotificationManager.error(error.message, "Failed");
        setUser({ loading: false });
      });
    setUser({ loading: true });
  };

  // spinner style

  const spinnerStyle = {
    width: "30px",
    height: "30px",
  };

  return (
    <Formik
      enableReinitialize
      initialValues={user}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Please enter a valid email")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      })}
      onSubmit={() => login()}
    >
      {({ errors, status, touched }) => (
        <div className="row ">
          <div
            className="col-md-5 d-flex "
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              height: "100vh",
            }}
          >
            <Link to="/" className="">
              <img
                style={{
                  height: "100px",
                  width: "100px",
                }}
                alt="Logo"
              />
            </Link>

            <div className=" align-self-center text-white">
              <h3>Welcome to Nexus</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                itaque debitis doloribus?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Amet itaque debitis doloribus?met itaque
                debitis doloribus?
              </p>
            </div>

            <div
              className=""
              style={{
                position: "absolute",
                margin: "auto",
                bottom: "0",
              }}
            >
              <Link to="#" className="">
                Terms and conditions |
              </Link>
              <Link to="#" className=" text-white">
                {" "}
                &copy; 2020 Nexus
              </Link>
            </div>
          </div>

          <div className="col-md-7">
            <div className="container">
            
              <div
                className="col-md-6 "
                style={{
                  position: "absolute",
                  top: "15%",
                  left: "25%",
                }}
              >
                {error ? (
                  <div role="alert" className="alert alert-danger">
                    <div className="alert-text">{error}</div>
                  </div>
                ) : null}
                <h2 className="text-center mb-5">Login Account</h2>
                <Form className="login-form">
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Username</label>
                    <Field
                      name="email"
                      type="text"
                      value={user.email}
                      onChange={handleChange}
                      className={
                        "form-control border" +
                        (errors.email && touched.email ? " is-invalid" : "")
                      }
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      name="password"
                      type={user.showPassword ? "text" : "password"}
                      value={user.password}
                      onChange={handleChange}
                      className={
                        "form-control border" +
                        (errors.password && touched.password
                          ? " is-invalid"
                          : "")
                      }
                    /><i className={`fa ${user.showPassword ? 'fa-eye' : 'fa-eye-slash'} password-icon`} onClick={togglePassword}/>
                   
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        className="form-check-input"
                        checked={user.rememberMe}
                        onChange={toggleRememberMe}
                      />
                      <small>Remember Me</small>
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={user.loading}
                    className="btn btn-login float-right"
                    // onClick={login}
                  >
                    {user.loading && (
                      <span className="text-capitalize">
                        <Loader style={spinnerStyle} />
                        Login
                      </span>
                    )}
                    {!user.loading && (
                      <span className="text-capitalize"> Login</span>
                    )}
                  </button>
                </Form>
                <p className="float-right pt-5 mt-5">
                Don't have an account yet? <Link to="/signup">Sign Up!</Link>
              </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
export default Login;

import React, { useState } from "react";
import bg from "../../assets/images/bg/bg-7.jpg";
import Logo from "../../assets/images/nexus_logo.jpg";
import { Link } from "react-router-dom";
import axios from "axios";


//  React Notification
import { NotificationManager } from "react-notifications";

//  Validation
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// token
import { setUserSession } from "../../utils/Common";

const Credentials = (props) => {
  // states

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
  });

  const [error, setError] = useState("");

  //  destructure
  const { firstName, lastName, username, password } = user;
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

  const togglePassword=()=>{
    setUser({...user,
      showPassword:!user.showPassword
    })

  }

  //  Login in user

  const login = () => {
   
    const body = {
      firstName,
      lastName,
      username,
      password
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




  return (
    <Formik
      enableReinitialize
      initialValues={user}
      validationSchema={Yup.object().shape({
        firstName: Yup.string()
          .required("First Name is required"),
        lastName: Yup.string()
          .required("Last Name is required"),
        username: Yup.string()
          .required("username is required"),
        password: Yup.string()
          .min(6, 'Password must be atleast 6 characters')
          .required("Password is required"),
        confirmPassword: Yup.string()
              .oneOf([Yup.ref('password')], 'Passwords do not match')
              .required('Confirm password is required')
      })}
      onSubmit={() => login()}
    >
      {({ errors, touched }) => (
        <div className="d-flex">
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
              <h3>Complete your Registration</h3>
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
                  top: "10%",
                  left: "25%",
                }}
              >
                {error ? (
                  <div role="alert" className="alert alert-danger">
                    <div className="alert-text">{error}</div>
                  </div>
                ) : null}
                <h2 className="text-center mb-5">Set up your Credentials</h2>
                <Form className="login-form">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="firstName">First Name</label>
                        <Field
                          name="firstName"
                          type="text"
                          value={user.firstName}
                          onChange={handleChange}
                          className={
                            "form-control border" +
                            (errors.firstName && touched.firstName ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="invalid-feedback"
                        />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="lastName">Last Name</label>
                        <input
                          name="lastName"
                          type="text"
                          value={user.lasttName}
                          onChange={handleChange}
                          className={
                            "form-control border" +
                            (errors.lastName && touched.lastName ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="invalid-feedback"
                        />
                    </div>
                  </div>
                  <div className="form-group mt-0 ">
                      <label htmlFor="username">Username</label>
                        <input
                          name="username"
                          type="text"
                          value={user.username}
                          onChange={handleChange}
                          className={
                            "form-control border" +
                            (errors.username && touched.username ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="invalid-feedback"
                        />
                    </div>
                  <div className="form-group mt-0">
                      <label htmlFor="password">Password</label>
                        <input
                          name="password"
                          type={user.showPassword ? "text" : "password"}
                          value={user.password}
                          onChange={handleChange}
                          className={
                            "form-control border" +
                            (errors.password && touched.password ? " is-invalid" : "")
                          }
                        /><i className={`fa ${user.showPassword ? 'fa-eye' : 'fa-eye-slash'} password-icon`} onClick={togglePassword}/>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                    </div>
                  <div className="form-group mt-0">
                      <label htmlFor="password">Confirm Password</label>
                        <input
                          name="confirmPassword"
                          type={user.showPassword ? "text" : "password"}
                          value={user.confirmPassword}
                          onChange={handleChange}
                          className={
                            "form-control border" +
                            (errors.confirmPassword && touched.confirmPassword ? " is-invalid" : "")
                          }
                        />
                        <ErrorMessage
                          name="confirmPassword"
                          component="div"
                          className="invalid-feedback"
                        />
                    </div>
                
                  <button
                    type="submit"
                    disabled={user.loading}
                    className="btn btn-login float-right"
                    // onClick={login}
                  >
                   {user.loading && ( <i className="fa fa-circle-notch fa-spin" style={{ marginRight: "5px" }}/>)}
                    {user.loading && <span className="text-capitalize">
                      Submit
                      </span>
                    }
                    {!user.loading && (
                      <span className="text-capitalize"> Submit</span>
                    )}
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
export default Credentials;

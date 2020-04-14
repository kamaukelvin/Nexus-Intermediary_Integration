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

const Signup = (props) => {
  // states

  const [user, setUser] = useState({
    email: "",
    ira: "",
    terms: false,
    loading: false,
  });

  const [error, setError] = useState("");

  //  destructure
  const { email, ira } = user;
  const { history } = props;


  // methods

  const handleChange = (evt) => {
    const value = evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });

    console.log(user);
  };
  const toggleAcceptTerms=()=>{
    setUser({...user,
      terms:!user.terms
    })
  }
  //  Login in user

  const login = () => {
    console.log("SIGNUP function with user state"+ JSON.stringify(user))
    const body = {
      email,
      ira,
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
        setUser({ ...user, loading: false });
        setUserSession(res.data.jwt);
        history.push("/dashboard");
      })
      // errors are printed out in the console
      .catch((error) => {
        console.log("we are at the error and error is" + JSON.stringify(error));
        setError(error.message);
        NotificationManager.error(error.message, "Failed");
        setUser({ ...user, loading: false });
      });
    setUser({ ...user, loading: true });
  };

  // spinner style

  const spinnerStyle = {
    width: "30px",
    height: "30px",
  };


  // IRA OPTIONS
  const options = [
    
    { value: 'Food', label: 'Food' },
    { value: 'Being Fabulous', label: 'Being Fabulous' },
    { value: 'Ken Wheeler', label: 'Ken Wheeler' },
    { value: 'ReasonML', label: 'ReasonML' },
    { value: 'Unicorns', label: 'Unicorns' },
    { value: 'Kittens', label: 'Kittens' },
  ];

  return (
    <Formik
      enableReinitialize
      initialValues={user}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Please enter a valid email")
          .required("Email is required"),
        ira: Yup.string()
          .required("IRA code is required"),
        terms: Yup.boolean()
              .oneOf([true], 'Please accept Terms and Conditions')
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
              <h3>Register for Free</h3>
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
                <h2 className="text-center mb-5">Create an Account</h2>
                <Form className="login-form">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
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
                    <label htmlFor="ira">IRA Code</label>
                    <Field 
                    name="ira" as="select" 
                    onChange={handleChange}
                    className={
                      "form-control border"+
                      (errors.ira && touched.ira ? " is-invalid" : "")
                    }>
                      {options.map(option =>
                        <option value={option.value}>{option.label}</option>
                      )}
                    </Field>
                    <ErrorMessage
                      name="ira"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group form-check">
  
                      <input
                        type="checkbox"
                        name="terms"
                        checked={user.terms}
                        onChange={toggleAcceptTerms}
                        className={
                          "form-check-input" +
                          (errors.terms && touched.terms ? " is-invalid" : "")
                        }
                      />
                    <label className="form-check-label">
                      I have read the terms and conditions
                    </label>
                    <ErrorMessage
                      name="terms"
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
                    {user.loading && (
                      <span className="text-capitalize">
                        <Loader style={spinnerStyle} />
                        Register
                      </span>
                    )}
                    {!user.loading && (
                      <span className="text-capitalize"> Register</span>
                    )}
                  </button>
                </Form>
                <p className="float-right  mt-5 pt-5">
                Already have an account? <Link to="/login">Log In</Link>
              </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
export default Signup;

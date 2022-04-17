import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/denticare-logo.png";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";
  useEffect(()=>{
    if (user) {
        navigate(from, { replace: true });
      };
  })
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  };

  

  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  };

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const navigateToSignUp = (e) => {
    navigate("/signup");
  };
  const resetPassword = async () => {
    if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
      }else{
        toast('Please Enter Your Email Address');
      }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="login-container p-4 rounded">
      <div className="text-center mb-4">
        <img className="w-50" src={logo} alt="" />
      </div>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter Your Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Enter Your Password"
            required
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button
          variant="danger"
          className="w-50 d-block mx-auto fs-5"
          type="submit"
        >
          Sign in
        </Button>
      </Form>
      <p className="mt-3">
        New to Red Onion?{" "}
        <span
          className="text-danger"
          style={{ cursor: "pointer" }}
          onClick={navigateToSignUp}
        >
          Please Sign Up
        </span>
      </p>
      <p className="mt-3">
        Forget Password?{" "}
        <span
          className="text-danger"
          style={{ cursor: "pointer" }}
          onClick={resetPassword}
        >
          Reset Password
        </span>
      </p>
      {errorElement}
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default SignIn;

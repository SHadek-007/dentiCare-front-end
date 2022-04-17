import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/denticare-logo.png";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [agree, setAgree] = useState(false);
  useEffect(()=>{
    if (user) {
        navigate("/");
      }
  })
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  if (loading || updating) {
    return <Loading></Loading>;
  };

  let errorElement;
  if (error || updateError) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message} {updateError?.message}</p>
      </div>
    );
  };
  const handleNameBlur = (e) => {
    setDisplayName(e.target.value);
  };
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const navigateToSignIn = (e) => {
    navigate("/signin");
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });

  };

  return (
    <div className="login-container p-4 rounded">
      <div className="text-center mb-4">
        <img className="w-50" src={logo} alt="" />
      </div>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            onBlur={handleNameBlur}
            type="text"
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            className={agree ? "text-dark" : "text-secondary"}
            onClick={() => setAgree(!agree)}
            type="checkbox"
            name="terms"
            id="terms"
            label="Accept Terms & Conditions"
          />
        </Form.Group>
        <Button
          disabled={!agree}
          variant="danger"
          className="w-50 d-block mx-auto fs-5"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
      <p className="mt-3">
        Already Have an Account?
        <span
          className="text-primary"
          style={{ cursor: "pointer" }}
          onClick={navigateToSignIn}
        >
          Please Sign In
        </span>
      </p>
       {errorElement}
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;

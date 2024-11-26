import "./SignupForm.css";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [message, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (data) => {
    setErrorMessage("");
    setSuccessMessage("");
    try {
      const response = await axios.post(
        " http://localhost:5000/api/users/register",
        data
      );
      setSuccessMessage("Signup successful! Redirecting to Login...");

      setTimeout(() => {
        navigate("/login");
      }, 3000);
      console.log("signup successful", response.data);
    } catch (err) {
      if (err.response) {
        const errMsg = err.response.data.message.toLowerCase();
        if (errMsg === "email already exists") {
          setErrorMessage("Email Already Exists");
        } else {
          setErrorMessage("Login Failed, Try again");
        }
        console.dir(err.response.data.message);
        //  setErrorMessage("")
        console.error("Error response:", err.response.data);
      } else if (err.request) {
        setErrorMessage("No response from server. Please try again later.");
      } else {
        setErrorMessage("An unexpected Error, try again");
      }
    }
  };

  return (
    <div className="signup-page container mt-5 shadow bg-body rounded">
      <h2 className="text-center mb-4">Sign Up</h2>
      {message && (
        <div className="alert alert-success text-center">{message}</div>
      )}
      {errorMessage && (
        <div class="alert alert-danger text-center">{errorMessage}</div>
      )}
      <form
        onSubmit={handleSubmit(handleSignup)}
        className="mx-auto"
        style={{ maxWidth: "400px" }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter full name"
            {...register("username", {
              required: "username is required",
              minLength: {
                value: 6,
                message: "Username must be 6 characters",
              },
            })}
          />
          {errors.username && (
            <div className="text-danger">{errors.username.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <div className="text-danger">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter password"
            {...register("password", {
              required: "password required",
              minLength: {
                value: 6,
                message: "password must be atleast 6 characters",
              },
            })}
          />
          {errors.password && (
            <div className="text-danger">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="MobileNumber" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            className="form-control"
            placeholder="Enter mobile number"
            {...register("mobileNumber", {
              required: "Mobile Number required",
              pattern: {
                value: /^[0-9]{10}$/,
                message:
                  "Mobile number must be exactly 10 digits, contains numbers",
              },
            })}
          />
          {errors.mobilenumber && (
            <div className="text-danger">{errors.mobilenumber.message}</div>
          )}
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-success w-25 my-3">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

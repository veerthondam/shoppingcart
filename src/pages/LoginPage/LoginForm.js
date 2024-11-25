import "./LoginForm.css";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSaveDetails = (data) => {
    console.log("form submittedd", data);
  };
  return (
    <div className="container mt-5 login-page shadow p-3 mb-5 bg-body rounded">
      <h2 className="text-center mb-4"> Login</h2>
      <form onSubmit={handleSubmit(onSaveDetails)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            className="form-control"
            placeholder="please enter Email"
            {...register("email", {
              required: "Email is required",
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
            placeholder="please enter Password"
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
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}

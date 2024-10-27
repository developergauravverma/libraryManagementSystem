import { FC, MouseEvent, useRef, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { User } from "../../../models/User";

const {
  loginForm,
  LoginFormError,
  loginFormInputGroup,
  loginFormInput,
  loginFormSubmit,
  loginFormRegister,
} = styles;

interface loginFormProps {
  updateLoggedInUser(user: User): void;
}

const LoginForm: FC<loginFormProps> = ({ updateLoggedInUser }) => {
  const [error, setError] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const handleLoginUser = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (emailRef && emailRef.current && passRef && passRef.current) {
      try {
        const req = await axios.post("http://localhost:8000/auth/login", {
          email: emailRef.current.value,
          password: passRef.current.value,
        });
        setError(false);
        updateLoggedInUser(req.data.user);
      } catch (error) {
        setError(true);
      }
    }
  };

  return (
    <form className={loginForm}>
      <h2>Please Login</h2>
      {error ? (
        <p className={LoginFormError}>UserName or Password is incorrect</p>
      ) : (
        <></>
      )}
      <div className={loginFormInputGroup}>
        <h6>Email</h6>
        <input
          className={loginFormInput}
          type="text"
          placeholder="User Email"
          name="email"
          required
          ref={emailRef}
        />
      </div>
      <div className={loginFormInputGroup}>
        <h6>Password</h6>
        <input
          className={loginFormInput}
          type="password"
          placeholder="Password"
          name="password"
          required
          ref={passRef}
        />
      </div>
      <button className={loginFormSubmit} onClick={handleLoginUser}>
        Login
      </button>
      <p>
        Don't have an account?{" "}
        <span className={loginFormRegister}>Create One here.</span>
      </p>
    </form>
  );
};

export default LoginForm;

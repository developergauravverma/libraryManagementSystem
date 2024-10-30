import { FC, MouseEvent, useRef, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { User } from "../../../../models/User";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Redux/ReduxStore";
import { loginUser } from "../../../../Redux/Slice/AuthanticationSclice";

const {
  loginForm,
  LoginFormError,
  loginFormInputGroup,
  loginFormInput,
  loginFormSubmit,
  loginFormRegister,
} = styles;

interface LoginFormProps {
  toggleRegister(): void;
}

const LoginForm: FC<LoginFormProps> = ({ toggleRegister }) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const auth = useSelector((state: RootState) => state.authentication);
  const dispatch: AppDispatch = useDispatch();

  const handleLoginUser = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (emailRef && emailRef.current && passRef && passRef.current) {
      dispatch(
        loginUser({
          email: emailRef.current.value,
          password: passRef.current.value,
        })
      );
    }
  };

  return (
    <form className={loginForm}>
      <h2>Please Login</h2>
      {auth.error ? (
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
        <span className={loginFormRegister} onClick={toggleRegister}>
          Create One here.
        </span>
      </p>
    </form>
  );
};

export default LoginForm;

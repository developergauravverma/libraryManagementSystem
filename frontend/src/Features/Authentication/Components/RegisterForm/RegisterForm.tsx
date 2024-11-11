import { FC, MouseEvent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Redux/ReduxStore";
import styles from "./Styles.module.css";
import {
  registerUser,
  resetRegisterSuccess,
} from "../../../../Redux/Slice/AuthanticationSclice";

const {
  registerForm,
  registerFormError,
  registerFormNameGroup,
  registerFormNameInputGroup,
  registerFormInputName,
  registerFormSubmit,
  registerFormLogin,
  registerFormInputGroup,
} = styles;

const RegisterForm: FC = () => {
  const authState = useSelector((state: RootState) => state.authentication);
  const dispatch: AppDispatch = useDispatch();

  const firstRef = useRef<HTMLInputElement>(null);
  const lastRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleRegisterUser = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      firstRef &&
      firstRef.current &&
      lastRef &&
      lastRef.current &&
      emailRef &&
      emailRef.current &&
      passwordRef &&
      passwordRef.current
    ) {
      dispatch(
        registerUser({
          type: "PATRON",
          firstName: firstRef.current.value,
          lastName: lastRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetRegisterSuccess());
    };
  }, []);

  return (
    <form className={registerForm}>
      <h2>Enter you'r Information</h2>
      {authState.error ? (
        <p className={registerFormError}>There was an error</p>
      ) : (
        <></>
      )}
      <div className={registerFormNameGroup}>
        <div className={registerFormNameInputGroup}>
          <h6>First Name</h6>
          <input
            className={registerFormInputName}
            placeholder="First Name"
            name="first"
            required
            ref={firstRef}
          />
        </div>
        <div className={registerFormNameInputGroup}>
          <h6>Last Name</h6>
          <input
            className={registerFormInputName}
            placeholder="Last Name"
            name="last"
            required
            ref={lastRef}
          />
        </div>
      </div>
      <div className={registerFormInputGroup}>
        <h6>Email</h6>
        <input
          className={registerFormInputName}
          placeholder="Email"
          name="email"
          required
          ref={emailRef}
        />
      </div>
      <div className={registerFormInputGroup}>
        <h6>Password</h6>
        <input
          className={registerFormInputName}
          placeholder="Password"
          name="password"
          required
          type="password"
          ref={passwordRef}
        />
      </div>
      <button className={registerFormSubmit} onClick={handleRegisterUser}>
        Register
      </button>
      {authState.registerSuccess ? (
        <p>
          Register Successfully.{" "}
          <span className={registerFormLogin}>Login here.</span>
        </p>
      ) : (
        <></>
      )}
    </form>
  );
};

export default RegisterForm;

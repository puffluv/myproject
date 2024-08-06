import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import "./style.scss";
import { Box } from "@mui/material";
import { instance } from "../../utils/axios";
import { useAppDispatch } from "../../utils/hook";
import { login } from "../../store/slice/auth";
import { appErrors } from "../../common/errors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosError } from "axios";

const AuthRootComponent: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (Event: { preventDefault: () => void }) => {
    Event.preventDefault();
    if (location.pathname === "/login") {
      try {
        const userData = {
          email,
          password,
        };
        const user = await instance.post("auth/login", userData);
        await dispatch(login(user.data));
        navigate("/");
      } catch (error) {
        if (error instanceof AxiosError) {
          toast.error(error.response?.data?.message || "Error logging in");
        }
      }
    } else {
      if (!firstName || !username || !email || !password || !confirmPassword) {
        toast.error(appErrors.ALL_FIELDS_REQUIRED);
        return;
      }

      if (!/\S+@\S+\.\S+/.test(email)) {
        toast.error(appErrors.INVALID_EMAIL);
        return;
      }

      if (/[^a-zA-Z0-9]/.test(password)) {
        toast.error(appErrors.PASSWORD_CHARACTER);
        return;
      }

      if (password.length < 6) {
        toast.error(appErrors.PASSWORD_LESS);
        return;
      }

      if (password !== confirmPassword) {
        toast.error(appErrors.PASSWORD_DONT_MUCH);
        return;
      }

      try {
        const userData = {
          firstName,
          username,
          email,
          password,
        };
        const newUser = await instance.post("auth/register", userData);
        await dispatch(login(newUser.data));
        navigate("/");
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response) {
            if (error.response.status === 409) {
              toast.error(
                error.response.data?.message || appErrors.EMAIL_OR_USERNAME
              );
            } else {
              toast.error(error.response.data?.message || "Error registering");
            }
          } else {
            console.error("Error registering", error);
            toast.error("Error registering");
          }
        }
      }
    }
  };

  return (
    <div className="root">
      <ToastContainer />
      <form className="form" onSubmit={handleSubmit}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={"0 4px 10px rgba(0, 0, 0, 0.15)"}
        >
          {location.pathname === "/login" ? (
            <LoginPage
              setEmail={setEmail}
              setPassword={setPassword}
              navigate={navigate}
            />
          ) : location.pathname === "/register" ? (
            <RegisterPage
              setEmail={setEmail}
              setPassword={setPassword}
              setConfirmPassword={setConfirmPassword}
              setFirstName={setFirstName}
              setUsername={setUsername}
              navigate={navigate}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;

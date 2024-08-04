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
import 'react-toastify/dist/ReactToastify.css';
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
        await dispatch(login(user.data))
        navigate('/')
      } catch (error) {
        if (error instanceof AxiosError) {
          console.error("Error logging in", error);
          toast.error(error.response?.data?.message || "Error logging in");
        }
      }
    } else {
      if (password === confirmPassword) {
        try {
          const userData = {
            firstName,
            username,
            email,
            password,
          };
          const newUser = await instance.post("auth/register", userData);
          await dispatch(login(newUser.data))
          navigate('/')
        } catch (error) {
          if (error instanceof AxiosError) {
            if (error.response) {
              if (error.response.status === 409) {
                toast.error("User with this email already exists");
              } else {
                toast.error(error.response.data?.message || "Error registering");
              }
            } else {
              console.error("Error registering", error);
              toast.error("Error registering");
            }
          }
        }
      } else {
        toast.error(appErrors.PasswordDoNotMuch);
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
          boxShadow={"5px 5px 10px #ccc"}
        >
          {location.pathname === "/login" ? (
            <LoginPage setEmail={setEmail} setPassword={setPassword} navigate={navigate} />
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

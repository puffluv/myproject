import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import { Box } from "@mui/material";
import { instance } from "../../utils/axios";
import { useAppDispatch } from "../../utils/hook";
import { login } from "../../store/slice/auth";
import { appErrors } from "../../common/errors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema, RegisterSchema } from "../../utils/yup";
import { useStyles } from "./style";

const AuthRootComponent: React.FC = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      location.pathname === "/login" ? LoginSchema : RegisterSchema
    ),
  });

  const handleSubmitForm = async (data: any) => {
    if (location.pathname === "/login") {
      try {
        const userData = {
          email: data.email,
          password: data.password,
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
      if (data.password !== data.confirmPassword) {
        toast.error(appErrors.PASSWORD_DONT_MUCH);
        return;
      }

      try {
        const userData = {
          firstName: data.firstName,
          username: data.username,
          email: data.email,
          password: data.password,
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
    <div className={classes.root}>
      <ToastContainer />
      <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
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
              navigate={navigate}
              register={register}
              errors={errors}
            />
          ) : location.pathname === "/register" ? (
            <RegisterPage
              navigate={navigate}
              register={register}
              errors={errors}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;

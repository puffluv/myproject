import { Button, TextField, Typography } from "@mui/material";
import { IPropsLogin } from "@src/common/types/auth";
import React from "react";
import "../style.scss";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { navigate, register, errors } = props;
  return (
    <>
      <Typography variant="h3">Авторизация</Typography>

      <Typography variant="subtitle1">
        Введите Вашу электронную почту и пароль
      </Typography>

      <TextField
        error={!!errors.email}
        type="email"
        fullWidth
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Введите email"
        helperText={errors.email ? `${errors.email.message}` : ""}
        {...register("email", {
          required: "Это обязательное поле!",
          pattern:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
        sx={{
          "& .MuiFormHelperText-root": {
            backgroundColor: "transparent !important",
            padding: "2px 4px !important",
            boxShadow: "none !important",
            border: "none !important",
          },
        }}
      />
      <TextField
        error={!!errors.password}
        type="password"
        fullWidth
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Введите пароль"
        helperText={errors.password ? `${errors.password.message}` : ""}
        {...register("password", {
          required: "Это обязательное поле!",
          minLength: 6,
        })}
      />
      <Button
        type="submit"
        sx={{
          fontFamily: "Ysabeau SC",
          marginTop: 2,
          marginBottom: 2,
          width: "60%",
          borderRadius: 5,
          backgroundColor: "#1900d5",
          color: "#fff",
          padding: "10px 20px",
          textTransform: "none",
          boxShadow: "0 3px 5px 2px rgba(25, 0, 213, .3)",
          backgroundImage: "linear-gradient(45deg, #1900d5 30%, #5300e8 90%)",
          transition: "background-color 0.3s, transform 0.3s",
          "&:hover": {
            backgroundColor: "#5300e8",
            transform: "scale(1.05)",
          },
          "&:active": {
            backgroundColor: "#3e00a6",
            transform: "scale(1)",
          },
        }}
        variant="contained"
      >
        Войти
      </Button>

      <Typography variant="body1" sx={{ fontFamily: "Ysabeau SC" }}>
        У Вас нет аккаунта?{" "}
        <span
          className="incitingText"
          onClick={() => {
            navigate("/register");
          }}
        >
          Регистрация
        </span>
      </Typography>
    </>
  );
};

export default LoginPage;

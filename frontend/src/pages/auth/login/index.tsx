import { TextField, Typography } from "@mui/material";
import { IPropsLogin } from "@src/common/types/auth";
import React from "react";
import AppLoadingButton from "../../../components/loading-button";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { navigate, register, errors, loading } = props;
  return (
    <>
      <Typography variant="h3">Авторизация</Typography>

      <Typography variant="subtitle1">
        Введите Вашу электронную почту и пароль
      </Typography>

      <TextField
        error={!!errors.email}
        fullWidth
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Введите email"
        helperText={errors.email ? `${errors.email.message}` : ""}
        {...register("email")}
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
        {...register("password")}
      />

      <AppLoadingButton loading={loading} type="submit" variant="contained">
        {loading ? null : "Войти"}
      </AppLoadingButton>

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

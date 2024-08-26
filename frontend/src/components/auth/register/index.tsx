import { TextField, Typography } from "@mui/material";
import { IPropsRegister } from "@src/common/types/auth";
import React from "react";
import AppButton from "../../../components/app-button";

const RegisterPage: React.FC<IPropsRegister> = (
  props: IPropsRegister
): JSX.Element => {
  const { navigate, register, errors } = props;
  return (
    <>
      <Typography variant="h3">Регистрация</Typography>

      <Typography variant="subtitle1">
        Введите данные для регистрации
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
        error={!!errors.firstName}
        fullWidth
        margin="normal"
        label="Name"
        variant="outlined"
        placeholder="Введите имя"
        helperText={errors.firstName ? `${errors.firstName.message}` : ""}
        {...register("firstName")}
      />
      <TextField
        error={!!errors.username}
        fullWidth
        margin="normal"
        label="Username"
        variant="outlined"
        placeholder="Введите псевдоним"
        helperText={errors.username ? `${errors.username.message}` : ""}
        {...register("username")}
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
      <TextField
        error={!!errors.confirmPassword}
        type="password"
        fullWidth
        margin="normal"
        label="Confirm Password"
        variant="outlined"
        placeholder="Подтвердите пароль"
        helperText={
          errors.confirmPassword ? `${errors.confirmPassword.message}` : ""
        }
        {...register("confirmPassword")}
      />

      <AppButton type="submit" variant="contained">
        Создать аккаунт
      </AppButton>

      <Typography variant="body1" sx={{ fontFamily: "Ysabeau SC" }}>
        У Вас уже есть аккаунт?{" "}
        <span
          className="incitingText"
          onClick={() => {
            navigate("/login");
          }}
        >
          Авторизация
        </span>
      </Typography>
    </>
  );
};

export default RegisterPage;

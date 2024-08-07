import { Button, TextField, Typography } from "@mui/material";
import { IPropsRegister } from "@src/common/types/auth";
import React from "react";
import "../style.scss";

const RegisterPage: React.FC<IPropsRegister> = (
  props: IPropsRegister
): JSX.Element => {
  const {
    setPassword,
    setEmail,
    setConfirmPassword,
    setFirstName,
    setUsername,
    navigate,
  } = props;
  return (
    <>
      <Typography variant="h3" textAlign="center">
        Регистрация
      </Typography>

      <Typography variant="subtitle1">
        Введите данные для регистрации
      </Typography>

      <TextField
        fullWidth
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Введите email"
        required
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Name"
        variant="outlined"
        placeholder="Введите имя"
        required
        onChange={(event) => setFirstName(event.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Username"
        variant="outlined"
        placeholder="Введите псевдоним"
        required
        onChange={(event) => setUsername(event.target.value)}
      />
      <TextField
        type="password"
        fullWidth
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Введите пароль"
        required
        onChange={(event) => setPassword(event.target.value)}
      />
      <TextField
        type="password"
        fullWidth
        margin="normal"
        label="Confirm Password"
        variant="outlined"
        required
        placeholder="Подтвердите пароль"
        onChange={(event) => setConfirmPassword(event.target.value)}
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
        Создать аккаунт
      </Button>

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

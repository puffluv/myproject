import { Button, TextField, Typography } from "@mui/material";
import { IPropsRegister } from "@src/common/types/auth";
import React from "react";

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
      <Typography variant="h3" fontFamily="Montserrat" textAlign="center">
        Регистрация
      </Typography>

      <Typography
        variant="subtitle1"
        fontFamily="Monsterrat"
        textAlign="center"
      >
        Введите данные для регистрации
      </Typography>

      <TextField
        fullWidth={true}
        margin="normal"
        label="Email"
        variant="standard"
        placeholder="Введите email"
        required
        onChange={(Event) => setEmail(Event.target.value)}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Name"
        variant="standard"
        placeholder="Введите имя"
        required
        onChange={(Event) => setFirstName(Event.target.value)}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Username"
        variant="standard"
        placeholder="Введите псевдоним"
        required
        onChange={(Event) => setUsername(Event.target.value)}
      />
      <TextField
        type="password"
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="standard"
        placeholder="Введите пароль"
        required
        onChange={(Event) => setPassword(Event.target.value)}
      />
      <TextField
        type="password"
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="standard"
        required
        placeholder="Подтвердите пароль"
        onChange={(Event) => setConfirmPassword(Event.target.value)}
      />

      <Button
        type="submit"
        sx={{
          fontFamily: "Montserrat",
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

      <Typography variant="body1" sx={{ fontFamily: "Montserrat" }}>
        У Вас уже есть аккаунт?
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

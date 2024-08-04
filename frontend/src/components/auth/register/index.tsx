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
        onChange={(Event) => setEmail(Event.target.value)}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Name"
        variant="standard"
        placeholder="Введите имя"
        onChange={(Event) => setFirstName(Event.target.value)}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Username"
        variant="standard"
        placeholder="Введите псевдоним"
        onChange={(Event) => setUsername(Event.target.value)}
      />
      <TextField
        type="password"
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="standard"
        placeholder="Введите пароль"
        onChange={(Event) => setPassword(Event.target.value)}
      />
      <TextField
        type="password"
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="standard"
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
        }}
        variant="text"
      >
        Создать аккаунт
      </Button>

      <Typography variant="body1" sx={{ fontFamily: "Montserrat" }}>
        У Вас уже есть аккаунт?
        <span className="incitingText" onClick={() => {navigate('/login')}}>Авторизация</span>
      </Typography>
    </>
  );
};

export default RegisterPage;

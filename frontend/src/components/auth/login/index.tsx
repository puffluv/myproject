import { Button, TextField, Typography } from "@mui/material";
import { IPropsLogin } from "@src/common/types/auth";
import React, { Fragment } from "react";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { setPassword, setEmail } = props;
  return (
    <>
      <Typography variant="h3" fontFamily="Montserrat" textAlign="center">
        Авторизация
      </Typography>

      <Typography
        variant="subtitle1"
        fontFamily="Monsterrat"
        textAlign="center"
      >
        Введите Вашу электронную почту и пароль
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
        type="password"
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="standard"
        placeholder="Введите пароль"
        onChange={(Event) => setPassword(Event.target.value)}
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
        Войти
      </Button>

      <Typography variant="body1" sx={{ fontFamily: "Montserrat" }}>
        У Вас нет аккаунта? <span className="incitingText">Регистрация</span>
      </Typography>
    </>
  );
};

export default LoginPage;

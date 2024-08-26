import { appErrors } from "../../common/errors";
import * as yup from "yup";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordPattern = /^[a-zA-Zа-яА-Я0-9._;]+$/;

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email(appErrors.INVALID_EMAIL)
    .required(appErrors.FIELDS_REQUIRED)
    .matches(emailPattern, appErrors.INVALID_EMAIL),
  password: yup
    .string()
    .min(6, appErrors.PASSWORD_LESS)
    .required(appErrors.FIELDS_REQUIRED)
    .matches(passwordPattern, appErrors.PASSWORD_CHARACTER),
});

export const RegisterSchema = yup.object().shape({
  email: yup
    .string()
    .email(appErrors.INVALID_EMAIL)
    .required(appErrors.FIELDS_REQUIRED)
    .matches(emailPattern, appErrors.INVALID_EMAIL),
  password: yup
    .string()
    .min(6, appErrors.PASSWORD_LESS)
    .required(appErrors.FIELDS_REQUIRED)
    .matches(passwordPattern, appErrors.PASSWORD_CHARACTER),
  confirmPassword: yup
    .string()
    .min(6, appErrors.PASSWORD_LESS)
    .required(appErrors.FIELDS_REQUIRED)
    .matches(passwordPattern, appErrors.PASSWORD_CHARACTER),
  firstName: yup.string().required(appErrors.FIELDS_REQUIRED),
  username: yup.string().required(appErrors.FIELDS_REQUIRED),
});

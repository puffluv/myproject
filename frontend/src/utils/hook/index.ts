import { AppDispatch, RootState } from "@src/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
  const { isLogged } = useAppSelector((state) => state.auth);
  return isLogged;
};

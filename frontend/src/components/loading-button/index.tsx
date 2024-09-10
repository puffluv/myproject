import { styled } from "@mui/styles";
import LoadingButton from "@mui/lab/LoadingButton";

const AppLoadingButton = styled(LoadingButton)({
  fontFamily: '"Ysabeau SC"',
  marginTop: "16px !important",
  marginBottom: "16px !important",
  height: "50px !important",
  width: "60% !important",
  maxWidth: "300px !important",
  borderRadius: "25px !important",
  backgroundColor: "#1900d5 !important",
  color: "#fff !important",
  padding: "10px 20px !important",
  textTransform: "none",
  boxShadow: "0 3px 5px 2px rgba(25, 0, 213, 0.3) !important",
  backgroundImage:
    "linear-gradient(45deg, #1900d5 30%, #5300e8 90%) !important",
  transition: "background-color 0.3s, transform 0.3s !important",

  "&:hover": {
    backgroundColor: "#5300e8 !important",
    transform: "scale(1.05) !important",
  },
  "& .MuiLoadingButton-loadingIndicator": {
    color: "white", // Задает белый цвет ползунка
  },
  "&:active": {
    backgroundColor: "#3e00a6 !important",
    transform: "scale(1) !important",
  },
});

export default AppLoadingButton;

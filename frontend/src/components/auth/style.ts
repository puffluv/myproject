import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    padding: "20px",
    color: "var(--text-primary)",
  },
  form: {
    flex: 1,
    "& h3": {
      marginBottom: "10px",
      textAlign: "center",
      color: "var(--text-primary)",
    },
    "& .subtitle1": {
      fontFamily: '"Ysabeau SC", sans-serif',
      marginBottom: "20px",
      textAlign: "center",
      color: "var(--text-secondary)",
    },
    "& .incitingText": {
      color: "#5300e8",
      marginLeft: "10px",
      cursor: "pointer",
      fontWeight: 600,
      textDecoration: "underline",
      transition:
        "color 0.3s ease-in-out, transform 0.3s ease-in-out !important",
      "&:hover": {
        color: "var(--primary-dark)", // Темный цвет на hover
        transform: "scale(1.1) !important", // Легкое увеличение
      },
      "&:active": {
        color: "var(--primary-light)", // Светлее при клике
        transform: "scale(1) !important", // Возвращение к исходному размеру
      },
    },
    "& .MuiInputBase-root": {
      borderRadius: "5px",
      backgroundColor: "var(--input-background)",
      transition: "background-color 0.3s, box-shadow 0.3s, border-color 0.3s",

      "&:hover": {
        backgroundColor: "var(--input-background-hover)",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
      },

      "& input": {
        transition: "border-color 0.3s",
        color: "var(--input-text)",

        "&:focus": {
          borderColor: "var(--primary-main)",
          outline: "none",
        },
      },
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderImage: "linear-gradient(45deg, #fff, #5300e8) 1",
        transition: "border-image 0.3s",
      },

      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "var(--borderColor-hover)",
      },
    },

    "& .MuiInputLabel-root": {
      color: "var(--input-label)",

      "&.Mui-focused": {
        color: "var(--primary-main)",
        transition: "color 0.3s",
      },
    },
  },
});

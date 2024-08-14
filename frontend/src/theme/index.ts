import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

export const tokens = (mode: string) => ({
  ...(mode === "dark"
    ? {
        primary: {
          DEFAULT: "#121212",
          100: "#1D1D1D",
          200: "#242424",
          300: "#2B2B2B",
          400: "#323232",
          500: "#3A3A3A",
          600: "#424242",
          700: "#4A4A4A",
          800: "#525252",
          900: "#5A5A5A",
        },
        secondary: {
          DEFAULT: "#757575",
        },
        background: {
          DEFAULT: "#121212",
          paper: "#1D1D1D",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#BDBDBD",
        },
        input: {
          background: "#2B2B2B",
          backgroundHover: "#323232",
          text: "#FFFFFF",
          label: "#BDBDBD",
        },
        borderColor: "#757575",
        borderColorHover: "#323232",
        white: {
          DEFAULT: "#FFFFFF",
          100: "#F7F7F7",
        },
        black: {
          DEFAULT: "#000000",
        },
        sidebarborderColor: "#3C3C3C",
      }
    : {
        primary: {
          DEFAULT: "#FFFFFF",
          100: "#F7F7F7",
          200: "#ECECEC",
          300: "#E0E0E0",
          400: "#D6D6D6",
          500: "#CCCCCC",
          600: "#B3B3B3",
          700: "#999999",
          800: "#808080",
          900: "#666666",
        },
        secondary: {
          DEFAULT: "#757575",
        },
        background: {
          DEFAULT: "#F7F7F7",
          paper: "#FFFFFF",
        },
        text: {
          primary: "#000000",
          secondary: "#757575",
        },
        input: {
          background: "#FFFFFF",
          backgroundHover: "#F1F1F1",
          text: "#000000",
          label: "#757575",
        },
        borderColor: "#CCCCCC",
        borderColorHover: "#B3B3B3",
        white: {
          DEFAULT: "#FFFFFF",
          100: "#F7F7F7",
          200: "D1D1D1",
        },
        black: {
          DEFAULT: "#000000",
        },
        sidebarborderColor: "#D1D1D1",
      }),
  gradient: {
    start: "#fff",
    end: "#5300e8",
  },
});

export const themeSettings: any = (mode: string) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      primary: {
        main: colors.primary.DEFAULT,
      },
      secondary: {
        main: colors.secondary.DEFAULT,
      },
      background: {
        default: colors.background.DEFAULT,
        paper: colors.background.paper,
      },
      text: {
        primary: colors.text.primary,
        secondary: colors.text.secondary,
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            backgroundColor: colors.input.background,
            "& .MuiOutlinedInput-root": {
              transition: "border-color 0.3s",
              "& fieldset": {
                borderColor: colors.borderColor,
                transition: "border-color 0.3s",
              },
              "&:hover fieldset": {
                borderColor: colors.borderColorHover,
              },
              "&.Mui-focused fieldset": {
                borderImage: `linear-gradient(45deg, ${colors.gradient.start}, ${colors.gradient.end}) 1`,
                transition: "border-image 0.3s", // Плавный переход
              },
              "& input": {
                color: colors.input.text,
              },
            },
            "& .MuiInputLabel-root": {
              color: colors.input.label,
              transition: "color 0.3s",
            },
          },
        },
      },
    },
    typography: {
      fontFamily: ["Ysabeau SC", "sans-serif"].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ["Ysabeau SC", "sans-serif"].join(","),
        fontSize: 40,
        fontWeight: 600,
      },
      h2: {
        fontFamily: ["Ysabeau SC", "sans-serif"].join(","),
        fontSize: 35,
        fontWeight: 600,
      },
      h3: {
        fontFamily: ["Ysabeau SC", "sans-serif"].join(","),
        fontSize: 30,
        fontWeight: 500,
      },
      h4: {
        fontFamily: ["Ysabeau SC", "sans-serif"].join(","),
        fontSize: 25,
        fontWeight: 500,
      },
      p: {
        fontFamily: ["Ysabeau SC", "sans-serif"].join(","),
        fontSize: 20,
      },
    },
  };
};

export const ColorModeContext = createContext<{ toggleColorMode: () => void }>({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme: any = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};

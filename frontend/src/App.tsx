import React from "react";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootComponent from "./components/auth";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import LayoutComponent from "./components/layout";
import PageWrapper from "./components/top-bar/pagewrapper";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PageWrapper>
          <LayoutComponent>
            <div className="App">
              <Routes>
                <Route element={<PrivateRoute />}>
                  <Route path="/" element={<Home />} />
                </Route>
                <Route path="login" element={<AuthRootComponent />} />
                <Route path="register" element={<AuthRootComponent />} />
              </Routes>
            </div>
          </LayoutComponent>
        </PageWrapper>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

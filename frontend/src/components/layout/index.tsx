import { ILayout } from "../../common/types/layout";
import React from "react"
import TopBarComponent from "../top-bar";
import { useLocation } from "react-router-dom";

const LayoutComponent = ({children}: ILayout) => {
  const location = useLocation()
  return (
    location.pathname === '/login' || location.pathname === '/register' ? (
      <>
      {children}
  </>
    ) : (  <>
      <TopBarComponent />
      {children}
  </>)
  
  )
};

export default LayoutComponent;

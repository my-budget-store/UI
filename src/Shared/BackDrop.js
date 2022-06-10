import React from "react";
import { BackDropDiv } from "../components/SideBar/SideBarCss";

function BackDrop(props) {
  const clickBackDropHandler = () => {
    if (props.ShowMenuSideDrawer) {
      props.ShowMenuSideDrawer(false);
    }
    if (props.ShowAccountSideDrawer) {
      props.ShowAccountSideDrawer(false);
    }
  };
  return <BackDropDiv onClick={clickBackDropHandler} />;
}

export default BackDrop;

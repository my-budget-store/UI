import React from "react";
import * as MdIcons from "react-icons/md";
import { ShowSideMenu, LeftSideBarDiv, LeftSideBarItems } from "./SideBarCss";
import { MdIconsStyle, LiSpan, NavLink } from "../../Shared/SharedCss";

function MenuSideBar() {
  return (
    <>
      <ShowSideMenu>
        <LeftSideBarDiv>
          <LeftSideBarItems>
            <NavLink to="/">
              <MdIcons.MdHome style={MdIconsStyle} />
              <LiSpan>MyBud</LiSpan>
            </NavLink>
          </LeftSideBarItems>
          <LeftSideBarItems>
            <NavLink to="/categories">
              <MdIcons.MdMenu style={MdIconsStyle} />
              <LiSpan>Categories</LiSpan>
            </NavLink>
          </LeftSideBarItems>
          <LeftSideBarItems>
            <NavLink to="/orders">
              <MdIcons.MdBorderColor style={MdIconsStyle} />
              <LiSpan>Orders</LiSpan>
            </NavLink>
          </LeftSideBarItems>
        </LeftSideBarDiv>
      </ShowSideMenu>
    </>
  );
}

export default MenuSideBar;

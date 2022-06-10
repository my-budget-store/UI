import React from "react";
import * as MdIcons from "react-icons/md";
import {
  ShowAccountSideMenu,
  RightSideBarDiv,
  RightSideBarItems,
} from "./SideBarCss";
import {
  MdIconsStyle,
  LiSpan,
  NavLink,
} from "../../Shared/SharedCss";

function AccountSideBar() {
  return (
    <ShowAccountSideMenu>
      <RightSideBarDiv>
        <RightSideBarItems>
          <NavLink to="/">
            <MdIcons.MdHome style={MdIconsStyle} />
            <LiSpan>MyBud</LiSpan>
          </NavLink>
        </RightSideBarItems>
        <RightSideBarItems>
          <NavLink to="/categories">
            <MdIcons.MdMenu style={MdIconsStyle} />
            <LiSpan>Categories</LiSpan>
          </NavLink>
        </RightSideBarItems>
        <RightSideBarItems>
          <NavLink to="/orders">
            <MdIcons.MdBorderColor style={MdIconsStyle} />
            <LiSpan>Orders</LiSpan>
          </NavLink>
        </RightSideBarItems>
      </RightSideBarDiv>
    </ShowAccountSideMenu>
  )
}

export default AccountSideBar
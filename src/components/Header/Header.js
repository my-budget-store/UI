import React, { useState } from "react";
import * as MdIcons from "react-icons/md";
import { HeaderTag } from "./HeaderCss";
import {
  MdIconsStyle,
  SearchBarStyle,
  Ul,
  Li,
  Spacer,
  LiSpan,
  NavLink,
} from "../../Shared/SharedCss";
import Helpers from "../../Shared/Helpers";
import CompactHeader from "./CompactHeader";
import MenuSideBar from "../SideBar/MenuSideBar";
import AccountSideBar from "../SideBar/AccountSideBar";
import BackDrop from "../../Shared/BackDrop";

function Header() {
  const [isSideMenuDrawerVisible, setSideMenuVisibility] = useState(false);
  const ShowMenuSideDrawer = (bool) => setSideMenuVisibility(bool);

  const [isAccountSideDrawerVisible, setAccountMenuVisibility] =
    useState(false);
  const ShowAccountSideDrawer = (bool) => setAccountMenuVisibility(bool);

  const [searchValue, setSearchValue] = useState("");
  const MaintainSearchValue = (value) => setSearchValue(value);

  const [, width] = Helpers.useWindowSize();
  if (width < 790) {
    if (isAccountSideDrawerVisible) {
      return (
        <>
          <AccountSideBar />
          <BackDrop ShowAccountSideDrawer={ShowAccountSideDrawer} />
        </>
      );
    }
    if (isSideMenuDrawerVisible) {
      return (
        <>
          <MenuSideBar />
          <BackDrop ShowMenuSideDrawer={ShowMenuSideDrawer} />
        </>
      );
    }
    return (
      <CompactHeader
        ShowMenuSideDrawer={ShowMenuSideDrawer}
        ShowAccountSideDrawer={ShowAccountSideDrawer}
        MaintainSearchValue={MaintainSearchValue}
        searchValue={searchValue}
      />
    );
  }
  return (
    <HeaderTag>
      <Ul>
        <Li>
          <NavLink to="/">
            <MdIcons.MdAccountCircle style={MdIconsStyle} />
            <LiSpan>MyBud</LiSpan>
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/categories">
            <MdIcons.MdMenu style={MdIconsStyle} />
            <LiSpan>Categories</LiSpan>
          </NavLink>
        </Li>
        <Li>
          <input placeholder="Search..." style={SearchBarStyle} />
        </Li>
        <Spacer />
        <Li>
          <NavLink to="/orders">
            <MdIcons.MdBorderColor style={MdIconsStyle} />
            <LiSpan>Orders</LiSpan>
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/cart">
            <MdIcons.MdShoppingCart style={MdIconsStyle} />
            <LiSpan>Cart</LiSpan>
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/account" className={NavLink}>
            <MdIcons.MdOutlineAccountCircle style={MdIconsStyle} />
            <LiSpan>Account</LiSpan>
          </NavLink>
        </Li>
      </Ul>
    </HeaderTag>
  );
}

export default Header;

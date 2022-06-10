import { AccountToggle, MenuToggle } from "../SideBar/SideBarCss";
import { HeaderDiv, SearchBar } from "./HeaderCss";
import * as MdIcons from "react-icons/md";
import { MdIconsStyle, Spacer, LiSpan, NavLink } from "../../Shared/SharedCss";

import React from "react";

function CompactHeader(props) {
  const clickMenuBarHandler = () => {
    props.ShowMenuSideDrawer(true);
  };

  const clickAccountBarHandler = () => {
    props.ShowAccountSideDrawer(true);
  };

  const MaintainSearchValueHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    props.MaintainSearchValue(lowerCase);
  };

  return (
    <>
      <HeaderDiv>
        <MenuToggle>
          <MdIcons.MdMenu style={MdIconsStyle} onClick={clickMenuBarHandler} />
        </MenuToggle>
        <NavLink to="/">
          <LiSpan>MyBud</LiSpan>
        </NavLink>
        <Spacer />
        <AccountToggle>
          <MdIcons.MdAccountCircle
            style={MdIconsStyle}
            onClick={clickAccountBarHandler}
          />
        </AccountToggle>
      </HeaderDiv>
      <HeaderDiv>
        <SearchBar onChange={MaintainSearchValueHandler} value={props.searchValue}/>
      </HeaderDiv>
    </>
  );
}

export default CompactHeader;

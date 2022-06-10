import styled from "styled-components";

export const MenuToggle = styled.div`
  color: white;
  margin-top: -1px;
  margin-left: 15px;
  font-size: 1rem;
`;

export const AccountToggle = styled.div`
  color: white;
  margin-top: -1px;
  margin-right: 15px;
  font-size: 1rem;
`;

const CommonSideMenu = {
  display: "flex",
  "zIndex": "200",
  position: "fixed",
  top: 0,
  height: "100%",
  width: "200px",
  color: "white",
  "backgroundColor": "black",
};

export const ShowAccountSideMenu = styled.div`
  ${CommonSideMenu}
  margin-right: -16px;
  right: 0;
`;

export const ShowSideMenu = styled.div`
  ${CommonSideMenu}
  left: 0;
  margin-left: -16px;
`;

const CommonSideUl = {
  top: 0,
  display: "flex",
  "flexDirection": "column",
  "justifyContent": "center",
};

export const RightSideBarDiv = styled.div`
  ${CommonSideUl}
  padding-right: 25px;
`;

export const LeftSideBarDiv = styled.div`
  padding-left: 25px;
  ${CommonSideUl};
`;

const CommonSideItems = {
  "lineHeight": "42px",
  width: "inherit",
  display: "flex",
  "flex-direction": "column",
  "text-align": "left",
};

export const RightSideBarItems = styled.div`
  padding-left: 35px;
  ${CommonSideItems}
`;

export const LeftSideBarItems = styled.div`
  padding-left: 35px;
  ${CommonSideItems}
`;

export const BackDropDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: grey;
  z-index: 100;
`;

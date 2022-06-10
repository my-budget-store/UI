import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const MdIconsStyle = {
  "fontSize": "25px",
};

export const minDeskWidth = {
  "min-width": "810px",
};

export const minMobileWidth = {
  "min-width": "200px",
};

export const SearchBarStyle = {
  "lineHeight": "28px",
  "borderRadius": "10px",
  margin: "5px",
};

export const Ul = styled.ul`
  display: flex;
  padding-left: 25px;
`;

export const Li = styled.li`
  margin-right: 25px;
  font-size: 1rem;
  display: flex;
`;

export const LiSpan = styled.span`
  margin-left: 5px;
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const NavLink = styled(Link)`
  color: white;
  font-size: 1rem;
  text-decoration: none;
`;

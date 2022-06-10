import styled from "styled-components";
import { minMobileWidth, SearchBarStyle } from "../../Shared/SharedCss";

export const HeaderTag = styled.header`
  background-color: black;
  line-height: 42px;
  top: 0;
`;

export const HeaderDiv = styled.div`
  display: flex;
  background-color: black;
  line-height: 42px;
  ${minMobileWidth}
`;

export const SearchBar = styled.input`
  width: 100%;
  ${SearchBarStyle}
`;

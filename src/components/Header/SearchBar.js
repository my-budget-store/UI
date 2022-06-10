import React from "react";

function SearchBar() {
  return (
    <HeaderDiv>
      <SearchBar
        onChange={MaintainSearchValueHandler}
        value={props.searchValue}
      />
    </HeaderDiv>
  );
}

export default SearchBar;

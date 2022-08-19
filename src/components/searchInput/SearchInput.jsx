import React from "react";
import "./searchInput.css";

const SearchInput = ({onchangeSearch}) => {
  return (
    <input 
    type="text" 
    name="search" 
    id="search" 
    placeholder="Search Robots" 
    onChange={onchangeSearch}/>
  );
};

export default SearchInput;

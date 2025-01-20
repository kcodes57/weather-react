import React from "react";
import "./Search.css";
export default function Search() {
  return (
    <div className="Search">
      <form className="SearchForm">
        <input type="search" placeholder="Enter a city..." required />
        <input type="submit" value="Search" className="SearchFormButton" />
      </form>
    </div>
  );
}

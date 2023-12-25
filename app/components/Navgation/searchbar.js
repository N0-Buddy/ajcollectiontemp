import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import AllCategories from "./allCategories";

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // handling changes that occuring on input
  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  // handling clear the search text
  const handleClearSearch = () => {
    setSearchText("");
  };

  // handling show suugestion when focus on input field
  const handleInputClick = () => {
    setShowSuggestions(true);
  };

  // handling blur on searhbar
  const handleSearchBarBlur = () => {
    setShowSuggestions(false);
  };

  return (
    <>
      <div className="search_bar">
        <input
          id="search_input"
          type="text"
          placeholder="Search Here..."
          value={searchText}
          onChange={handleSearchInputChange}
          onClick={handleInputClick}
          onBlur={handleSearchBarBlur}
        />
        <label className="search_icon" htmlFor="search_input">
          <BsSearch />
        </label>
        <label className="all_categories_dropdown">
          <AllCategories />
        </label>
        {searchText && (
          <label
            className="clear_search"
            htmlFor="search_input"
            onClick={handleClearSearch}
          >
            <FaTimes />
          </label>
        )}
      </div>
      {/* <div className={`overlay ${showSuggestions ? "focused" : ""}`}></div> */}
      {showSuggestions && (
        <div className="searchbar_suggestion show_suggestion">
          <h1 className="suggestoins_heading">Category</h1>
          <span className="category_line"></span>
          <span className="suggestoin">All Products</span>
          <span className="suggestoin">Clothing</span>
          <span className="suggestoin">Sale Clothing</span>
          <span className="suggestoin">Upto 50% Off</span>
          <span className="suggestoin">Collection</span>
        </div>
      )}
    </>
  );
};

export default Searchbar;

import React from 'react';

function SearchBar(props) {
  return (
    <div className="searchbar-container">
      <form onSubmit={props.searchProps.onSubmitForm}>
        <input type="text" value={props.searchProps.inputVal} placeholder="Search..." onChange={props.searchProps.onChangeInput} /><br />
        <label>
          <input type="checkbox" checked={props.searchProps.checkboxVal} onChange={props.searchProps.onChangeCheckbox} />
          Only show products in stock
        </label>
      </form>
    </div>
  );
}

export default SearchBar;

import React from 'react';

const SearchField = ({filter, onChange}) => (
  <>
  <label htmlFor="search_input">Find contacts by name</label>
  <input id="search_input" name="filter" type="text" value={filter} onChange={onChange}></input>
  </>
);

export {SearchField};
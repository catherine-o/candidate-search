import React from "react";
import styled from "styled-components";

export default function Search({ setFilter, text, setText }) {
  const handleOnSearch = (e) => {
    e.preventDefault();
    setFilter(text);
  };
  console.log(text);

  return (
    <form onSubmit={handleOnSearch}>
      <input
        name="filter"
        type="text"
        size="30"
        placeholder="Search by candidate or keyword"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <StyledButton type="submit">Search</StyledButton>
    </form>
  );
}

const StyledButton = styled.button`
  background-color: #04aa6d;
  border-radius: 5px;
`;

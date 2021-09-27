import React from "react";
import Search from "./Search";
import CandidatesList from "./CandidatesList";
import styled from "styled-components";

const filterCandidates = (candidates, filter) => {
  return filter
    ? candidates.filter((candidate) =>
        candidate.name.toLowerCase().includes(filter)
      )
    : candidates;
};

export default function CandidateContainer({ data }) {
  const [filter, setFilter] = React.useState("");
  const [text, setText] = React.useState("");
  const [filterData, setFilterData] = React.useState([]);

  React.useEffect(() => {
    const candidates = filterCandidates(data.results, filter);
    setFilterData(candidates);
  }, [filter]);

  const clearFilter = () => {
    setFilter("");
    setText("");
  };

  return (
    <Div>
      <Header className="header">
        <span>{filterData.length} Candidates</span>
        <span onClick={clearFilter}>Clear all filter</span>
      </Header>
      <Search setFilter={setFilter} text={text} setText={setText} />
      <CandidatesList data={filterData} />
    </Div>
  );
}

const Div = styled.div`
  background-color: lightgray;
  border: 1px solid darkgray;
  margin: 50px;
  padding: 20px;
`;

const Header = styled.header`
  margin: 15px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

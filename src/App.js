import React from "react";
import CandidateContainer from "components/CandidateContainer";
import "styled-components";
import { getSyncCandidates } from "data/api";

function App() {
  const data = getSyncCandidates();
  return <CandidateContainer data={data} />;
}

export default App;

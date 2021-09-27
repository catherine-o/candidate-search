import React from "react";
import icon from "../ui-kit/icons/svg/icon-plus-with-circle.svg";
import { Modal } from "../ui-kit";
import styled from "styled-components";

const Candidates = ({ candidates, handleOnClick }) => {
  return candidates.map((candidate) => {
    return (
      <Li onClick={() => handleOnClick(candidate)}>
        <div style={{ width: "50px" }}>
          <input type="checkbox" />
        </div>
        <div style={{ width: "220px" }}>{candidate.name}</div>
        <div style={{ width: "300px" }}>Status</div>
        <div style={{ width: "200px" }}>#</div>
        <div style={{ width: "300px" }}>Action</div>
        <button>
          <img src={icon} />
        </button>
      </Li>
    );
  });
};

export default function CandidateList({ data }) {
  const [candidate, setCandidate] = React.useState();

  const handleOnClick = (candidate) => {
    setCandidate(candidate);
  };

  const handleOnClose = () => {
    setCandidate(undefined);
  };

  return (
    <>
      <Modal.Modal isOpen={!!candidate} onClose={handleOnClose}>
        <Modal.Title>{candidate?.name}</Modal.Title>
        <Modal.Body>
          <p>{candidate?.email}</p>
        </Modal.Body>
        <Modal.Actions>
          <button onClick={handleOnClose}>Close</button>
        </Modal.Actions>
      </Modal.Modal>
      <Ul>
        <Li>
          <div style={{ width: "50px" }}>
            <input type="checkbox" />
          </div>
          <div style={{ width: "220px" }}>Candidate Name</div>
          <div style={{ width: "300px" }}>Status</div>
          <div style={{ width: "200px" }}># Apps</div>
          <div style={{ width: "300px" }}>Last Action</div>
        </Li>
        <Candidates candidates={data} handleOnClick={handleOnClick} />
      </Ul>
    </>
  );
}

const Ul = styled.ul`
  list-style-type: none;
`;

const Li = styled.li`
  display: flex;
`;

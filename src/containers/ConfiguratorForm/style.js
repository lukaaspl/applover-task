import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding-top: 20px;
  padding-left: 29px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-align: left;
  width: 300px;
`;

export const StyledForm = styled.form`
  flex-grow: 1;
`;

export const StepButtonContainer = styled.div`
  display: flex;
  width: 1px;
`;

export const StepButton = styled.button`
  display: block;
  margin-right: ${({ next }) => (!next ? "13px" : "0")}
  background-color: ${({ next }) => (next ? "#6f91aa" : "transparent")};
  border: 2px solid #6f91aa;
  width: 126px;
  height: 31px;
  line-height: 29px;
  color: ${({ next }) => (next ? "#fff" : "#6f91aa")};
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s;
  outline: none;
  flex-shrink: 0;

  :hover,
  :focus {
    background-color: ${({ next }) => (next ? "#5e819b" : "none")};
  }
`;

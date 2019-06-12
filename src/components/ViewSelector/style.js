import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: absolute;
  right: 35px;
  top: 20px;
  width: 72px;
  height: 27px;
  border: 1px solid;
  display: flex;
  color: #6f91aa;
  font-size: 14px;
  line-height: 23px;
`;

export const ViewOption = styled.div`
  flex: 1;
  border: 1px solid #6f91aa;
  background-color: ${({ active }) => (active ? "#fff" : "#cbcbcb")};
  transition: background-color 0.2s;
  cursor: ${({ active }) => (active ? "default" : "pointer")};
`;

import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
`;

export const LinkButton = styled.a`
  display: block;
  height: 32px;
  line-height: 32px;
  width: 118px;
  border-radius: 3px;
  background-color: #77779d;
  color: #fff;
  font-size: 14px;
  text-align: center;
  margin-left: 19px;
  transition: background-color 0.2s;
  cursor: pointer;

  :hover {
    background-color: #656587;
  }
`;

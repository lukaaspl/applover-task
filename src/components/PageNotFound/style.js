import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
  margin-top: 100px;
  text-align: center;
`;

export const Header = styled.h2`
  font-size: 50px;
  color: #333;
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
  display: block;
  margin: 20px auto;
  width: 230px;
  background-color: #333;
  color: #fff;
  padding: 8px 0;
  border-radius: 10px;
  font-size: 14px;
  box-shadow: 0 8px 10px -4px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
  transition: 0.2s;

  :hover {
    background-color: #555;
  }
`;

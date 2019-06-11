import styled from "styled-components";

export const StyledWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.viewport.width};
  padding: 0 107px;
  margin: 0 auto;
  height: 80px;
`;

export const NavWrapper = styled.div`
  display: flex;
`;

import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.viewport.width};
  margin: 22px auto;
  text-align: center;
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-top: 19px;
  height: 472px;
  color: #848c93;
  transform: translateX(60px);
`;

import styled, { css } from "styled-components";

export const LoadingOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(173, 178, 181, 0.83);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;

  pointer-events: ${({ visible }) => (visible ? "all" : "none")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

export const Label = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 47px;
`;

export const LoadingBar = styled.div`
  position: relative;
  border: 1px solid #fff;
  border-radius: 40px;
  width: 500px;
  height: 32px;
  padding: 7px;
`;

export const LoadingProgressBar = styled.div`
  height: 100%;
  width: ${({ progress }) => `${progress}%`};
  background-color: #fff;
  border-radius: 40px;
`;

const lightgray = css`
  ${({ theme }) => theme.color.lightgray};
`;

export const LoadingProgressPercent = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
  font-size: 14px;
  color: ${({ isWhite }) => (isWhite ? "#fff" : lightgray)};
  transition: color 0.2s;
`;

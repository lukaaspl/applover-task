import styled from "styled-components";
import { css } from "@emotion/core";

export const StyledWrapper = styled.div`
  position: absolute;
  transition: opacity 0.3s;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? "all" : "none")};
  background-color: #fff;
  left: -155px;
  top: 64px;
  width: 300px;
  height: 222px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  z-index: 2;

  ::before {
    content: "";
    position: absolute;
    right: 80px;
    border-bottom: 20px solid #fff;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    transform: translate(100%, calc(-100% + 5px));
  }
`;

export const loaderStyles = css`
  position: absolute;
  left: calc(50% - 25px);
  top: calc(50% - 25px);
`;

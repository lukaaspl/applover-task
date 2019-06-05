import { keyframes, css } from "styled-components";

export const heartPulsing = keyframes`
  0% {
    transform: scale(1);
  }

  60% {
    transform: scale(0.8);
    opacity: 0.8;
  }
`;

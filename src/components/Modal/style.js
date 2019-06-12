import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  width: 813px;
  height: 432px;
  left: 50%;
  top: 50%;
  border: 1px solid #7998b0;
  padding: 40px 30px;
  transition: ${({ visible }) => (visible ? "opacity 0.2s 0.2s, transform 0.2s 0.2s" : "opacity 0.2s, transform 0.2s")};
  z-index: 2;
  background-color: #ffffff;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) => (visible ? "translate(-50%, -50%)" : "translate(-50%, calc(-50% - 30px))")};
  pointer-events: ${({ visible }) => (visible ? "all" : "none")};
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #adb2b5;
  z-index: 1;
  transition: opacity 0.2s;
  pointer-events: ${({ visible }) => (visible ? "all" : "none")};
  opacity: ${({ visible }) => (visible ? 0.25 : 0)};
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 16px;
  width: 16px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;

  :hover {
    opacity: 1;
  }

  ::after,
  ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 2px;
    background-color: #6f91aa;
    transform: rotate(45deg);
  }

  ::before {
    transform: rotate(-45deg);
  }
`;

import styled from "styled-components";

export const Alert = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 80px;
  background-color: ${({ theme }) => theme.color.red};
  text-align: center;
  letter-spacing: 0.8px;
  line-height: 80px;
  color: #fff;
  transform: ${({ visible }) => (visible ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  transition: transform 0.2s;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 50%;
  right: 33px;
  transform: translateY(-50%);
  height: 14px;
  width: 14px;
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
    background-color: #fff;
    transform: rotate(45deg);
  }

  ::before {
    transform: rotate(-45deg);
  }
`;

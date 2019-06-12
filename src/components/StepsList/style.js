import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 359px;
  height: 83px;
  position: relative;
  margin: 0 auto;
  padding: 0 14px 0 11px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Connector = styled.div`
  position: absolute;
  left: 11px;
  right: 14px;
  top: 22px;
  height: 2px;
  background-color: #ebf7ff;
`;

export const CircleWrapper = styled.div`
  position: relative;
`;

export const Circle = styled.div`
  height: 46px;
  width: 46px;
  background-color: ${({ active }) => (active ? "#95a3ad" : "#cddbe5")};
  transition: 0.2s;
  border-radius: 50%;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    background-color: ${({ active }) => (active ? "#fff" : "#6991b2")};
    height: 6px;
    width: 6px;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.2s;
  }
`;

export const Description = styled.div`
  display: block;
  position: absolute;
  line-height: 1.3;
  font-size: 10px;
  font-weight: bold;
  color: #848c93;
  text-transform: uppercase;
  margin-top: 10px;
  text-align: center;
  left: 54%;
  transform: translateX(-50%);
  width: 110px;
`;

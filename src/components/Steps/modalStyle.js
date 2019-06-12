import styled from "styled-components";

export const ModalTitle = styled.h2`
  font-weight: normal;
  font-size: 24px;
  color: #6f91aa;
  border-bottom: 1px solid #7998b0;
  padding-bottom: 7.5px;
  margin-bottom: 26.5px;
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const DoorType = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  span {
    display: block;
    margin-bottom: 20px;
    font-size: 18px;
    color: #6f91aa;
  }
`;

export const Box = styled.div`
  position: relative;
  width: 187px;
  height: 229px;
  background-color: #d8d8d8;
`;

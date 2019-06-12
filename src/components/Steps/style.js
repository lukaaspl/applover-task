import styled from "styled-components";

export const StepTitle = styled.h3`
  padding-bottom: 6.5px;
  border-bottom: 1px solid #f7f7f7;
  width: 153px;
  margin-bottom: 16.5px;
  font-weight: normal;
  margin-top: ${({ next }) => (next ? "35px" : 0)};
`;

export const RadioContainer = styled.label`
  display: block;
  position: relative;
  margin-bottom: 11.5px;
  line-height: 16px;
  cursor: pointer;
  user-select: none;
  text-align: left;
  padding-left: 22px;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    :checked ~ span::after {
      display: block;
    }
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #fff;
    border: 3px solid #cddbe5;
    border-radius: 50%;

    ::after {
      content: "";
      position: absolute;
      display: none;
      top: 1px;
      left: 1px;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: #6991b2;
    }
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 9px;

  label {
    width: 42px;
    display: inline-block;
  }

  input {
    margin: 0 5px 0 30px;
    width: 44px;
    height: 24px;
    border: 1px solid #a8a5a5;
    padding: 4px 7px;
    font-size: 12px;
    color: #848c93;
    outline: none;

    :hover,
    :focus {
      border-color: #727070;
    }
  }
`;

export const CounterContainer = styled.div`
  margin-bottom: 10px;

  label {
    display: inline-block;
    width: 130px;
  }

  input,
  button {
    width: 24px;
    height: 24px;
    margin-right: 4px;
    font-size: 12px;
    color: #848c93;
    text-align: center;
    outline: none;
  }

  input {
    border: 1px solid #a8a5a5;

    :hover,
    :focus {
      border-color: #727070;
    }
  }

  button {
    border: none;
    background-color: #cddbe5;
    cursor: pointer;
    transition: background-color 0.2s;

    :hover {
      background-color: #b8c8d3;
    }
  }
`;

export const ColorContainer = styled.div`
  display: inline-block;
  margin-right: 24px;

  label {
    margin-top: 10px;
    text-align: center;
  }
`;

export const ColorBox = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin: 0 auto;
`;

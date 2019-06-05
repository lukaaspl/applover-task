import styled from "styled-components";

export const Wrapper = styled.div`
  width: 397px;
  margin: 89px auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #727272;
  margin-bottom: 73px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  padding: 12px 23px;
  color: #333;
  height: 48px;
  margin-bottom: 22px;
  font-family: ${({ theme }) => theme.font.primary};
  border: 1px solid #c9c6c6;
  border-radius: 6px;
  font-size: 18px;
  outline: none;

  :hover,
  :focus {
    border-color: #7c7979;
  }

  ::placeholder {
    color: ${({ theme }) => theme.color.lightgray};
  }

  :first-child {
    margin-bottom: 34px;
  }
`;

const checkboxSize = "25px";

export const CheckboxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-left: 2px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.lightgray};
  font-size: 16px;
  line-height: ${checkboxSize};
  user-select: none;

  :hover input ~ span,
  input:checked ~ span,
  input:focus ~ span {
    background-color: #f8f8f8;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  input:checked ~ span::after {
    display: block;
  }
`;

export const Checkbox = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: ${checkboxSize};
  width: ${checkboxSize};
  border: 1px solid ${({ theme }) => theme.color.lightgray};

  ::after {
    content: "";
    position: absolute;
    display: none;
    left: 9px;
    top: 5px;
    width: 7px;
    height: 10px;
    border: 1px solid #a5a1a1;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  border: none;
  background-color: #1de278;
  color: #fff;
  font-size: 18px;
  line-height: 48px;
  margin-top: 31px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s;

  :hover,
  :focus {
    background-color: #1bd16f;
  }
`;

import styled from "styled-components";
export const Button = styled.button`
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  font-size: 16px;
  font-weight: 600;
  color: white;
  width: 220px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  border: 1px solid black;
  color: black;
  background-color: white;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;

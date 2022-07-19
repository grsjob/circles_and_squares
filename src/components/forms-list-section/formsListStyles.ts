import styled, { css } from "styled-components";

export const StyledFormsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 128px);
  grid-gap: 10px;
`;

export const FormListHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const BurgerButton = styled.button`
  position: relative;
  padding: 0;
  border: 0;
  width: 36px;
  height: 26px;
  background-color: transparent;
  color: #fff;
  & span {
    display: block;
    width: 36px;
    height: 6px;
    background-color: #d9d9d9;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 36px;
    height: 6px;
    background-color: #d9d9d9;
  }
  &::before {
    top: 0;
    left: 0;
  }
  &::after {
    bottom: 0;
    left: 0;
  }
  ${(props) => {
    switch (props.sidePanelVisible) {
      case true:
        return css`
          &::before {
            transform: translateY(10px) rotate(-45deg);
          }
          &::after {
            transform: translateY(-10px) rotate(45deg);
          }
          & span {
            display: none;
          }
        `;
    }
  }}
`;

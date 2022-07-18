import styled, { css } from "styled-components";

export const StyledListItem = styled.li`
  width: 128px;
  height: 128px;
  background-color: ${(props) => props.color};
  ${(props) => {
    switch (props.form) {
      case "circle":
        return css`
          border-radius: 50%;
        `;
      case "triangle":
        return css`
          width: 0;
          height: 0;
          border-left: 64px solid transparent;
          border-right: 64px solid transparent;
          border-bottom: 128px solid ${(props) => props.color};
          background-color: #fff;
        `;
    }
  }}
`;

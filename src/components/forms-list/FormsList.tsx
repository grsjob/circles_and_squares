import React, { useId } from "react";
import test from "../../assets/test.json";
import ListItem from "../listItem/ListItem";
import { IData } from "../../types/data";
import { StyledFormsList } from "./formListStyles";

const FormsList = () => {
  const data: IData[] = test;

  return (
    <StyledFormsList>
      {data.map((item) => (
        <ListItem
          key={useId()}
          form={item.form}
          color={item.color}
          tone={item.dark}
        />
      ))}
    </StyledFormsList>
  );
};

export default FormsList;

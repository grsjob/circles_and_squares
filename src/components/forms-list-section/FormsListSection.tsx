import React, { useId } from "react";
import test from "../../assets/test.json";
import ListItem from "../listItem/ListItem";
import { IData } from "../../types/data";
import { StyledFormsList } from "./formsListStyles";
import FormsFilter from "../filters/forms-filter/FormsFilter";

const FormsListSection = () => {
  const data: IData[] = test;

  return (
    <section>
      <h2 className="visually-hidden">Список фигур</h2>
      <header>
        <FormsFilter />
      </header>
      <StyledFormsList>
        {data.map((item) => (
          <ListItem
            key={useId()}
            form={item.form}
            color={item.color}
            tone={item.dark}
            ariaLabel={item.form}
          />
        ))}
      </StyledFormsList>
    </section>
  );
};

export default FormsListSection;

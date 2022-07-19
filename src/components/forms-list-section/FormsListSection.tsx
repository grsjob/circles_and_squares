import React, { useId } from "react";
import ListItem from "../listItem/ListItem";
import { IData } from "../../types/data";
import { StyledFormsList } from "./formsListStyles";
import FormsFilter from "../filters/forms-filter/FormsFilter";

interface FormsListSectionProps {
  data: IData[];
  columns: number;
}

const FormsListSection = ({ data, columns }: FormsListSectionProps) => {
  return (
    <section>
      <h2 className="visually-hidden">Список фигур</h2>
      <header>
        <FormsFilter />
      </header>
      <StyledFormsList>
        {data.map((item) => (
          <ListItem
            key={Math.random().toString(32).substring(0, 5)}
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

import React, { useId } from "react";
import ListItem from "../listItem/ListItem";
import { IData } from "../../types/data";
import {
  BurgerButton,
  FormListHeader,
  StyledFormsList,
} from "./shapesListStyles";
import FormsFilter from "../filters/forms-filter/FormsFilter";
import { store } from "../../state/store";
import { sidePanelVisibleToggle } from "../../state/slices/appSlice";
import { useStore } from "../../state/storeHooks";

interface FormsListSectionProps {
  data: IData[];
  columns: number;
}

const ShapeListSection = ({ data, columns }: FormsListSectionProps) => {
  const { sidePanelVisible } = useStore(({ app }) => app);

  return (
    <section>
      <h2 className="visually-hidden">Список фигур</h2>
      <FormListHeader>
        <BurgerButton
          sidePanelVisible={sidePanelVisible}
          onClick={() => store.dispatch(sidePanelVisibleToggle())}
        >
          <span></span>
        </BurgerButton>
        <FormsFilter />
      </FormListHeader>
      <StyledFormsList columns={columns}>
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

export default ShapeListSection;

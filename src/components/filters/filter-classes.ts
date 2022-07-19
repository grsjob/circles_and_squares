import { IData } from "../../types/data";

export class Filter {
  public data: IData[];
  public filter: string | string[];

  constructor(data: IData[]) {
    this.data = data;
  }
  applyFilter() {
    return this.data;
  }
}

export class FormsFilter extends Filter {
  constructor(data: IData[], filter: string[]) {
    super(data);
    this.filter = filter;
  }

  applyFilter() {
    return this.data.filter((item) => this.filter.includes(item.form));
  }
}

export class ColorsFilter extends Filter {
  constructor(data: IData[], filter: string[]) {
    super(data);
    this.filter = filter;
  }

  applyFilter() {
    return this.data.filter((item) => this.filter.includes(item.form));
  }
}

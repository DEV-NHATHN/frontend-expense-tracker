export type ChartItem = {
  type?: string;
  color?: string;
  percent?: number;
};

export type TransactionItem = {
  _id?: string;
  name?: any;
  color?: string;
};

export interface PaginationParams {
  _limit: number;
  _page: number;
  _totalRows: number;
}

// getList ➤ 1 format Obj 2 key {data,pagination}
export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListParams {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: "asc" | "desc";
  // Other keys
  [key: string]: any;
}

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

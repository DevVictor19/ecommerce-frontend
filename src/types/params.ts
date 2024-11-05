export type Params<T> = {
  page: number;
  size: number;
  sort: 'ASC' | 'DESC';
  sortBy: keyof T;
};

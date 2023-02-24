export interface PaginateParams {
  limit?: number;
  itemsPerPage?: number;
}

export interface PaginatedList<T> {
  items: T[];
  pagination: {
    total: number;
    itemsPerPage: number;
    currentPage: number;
    pages: number;
  };
}

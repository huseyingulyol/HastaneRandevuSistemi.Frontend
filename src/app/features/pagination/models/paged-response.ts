export interface PagedResponse<T> {
    data: T[];
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalRecords: number;
  }
  
  
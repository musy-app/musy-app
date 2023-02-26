// eslint-disable-next-line @typescript-eslint/no-explicit-any
type APIResponse<TData = any> = {
  success: boolean;
  data: TData;
  error?: string;
};

export type { APIResponse };

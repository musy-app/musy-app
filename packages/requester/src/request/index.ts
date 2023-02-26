import axios, { AxiosRequestConfig } from "axios";

import { APIResponse } from "../types";

type ApiRequestConfig = AxiosRequestConfig;

const createApiUrl = (url: string): string => {
  return `${process.env.NEXT_PUBLIC_API_PATH}${url}`;
};

const createAuthHeaders = () => ({
  Authorization: `${process.env.NEXT_PUBLIC_AUTH_PREFIX || "Bearer"} ${
    process.env.NEXT_PUBLIC_AUTH_TOKEN
  }`,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const request = async <TData = any>(
  url: string,
  options?: ApiRequestConfig
): Promise<APIResponse<TData>> => {
  url = createApiUrl(url);

  options = {
    ...options,
    headers: {
      ...createAuthHeaders(),
      ...options?.headers,
    },
  };

  const response = await axios.request<TData>({
    url,
    ...options,
  });

  return response.data as APIResponse<TData>;
};
import axios, { AxiosRequestConfig } from "axios";

import { APIResponse, APIError } from "@musy-app/shared-types";

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
const request = async <TData = any>(
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

  const response = axios
    .request<APIResponse<TData>>({
      url,
      ...options,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error: APIError) => {
      throw error;
    });

  return response;
};

export default request;

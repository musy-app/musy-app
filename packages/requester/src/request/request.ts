import { APIError, APIResponse } from "@musy-app/shared-types";
import axios, { AxiosRequestConfig } from "axios";

type ApiRequestConfig = Exclude<AxiosRequestConfig, "method">;

const createApiUrl = (url: string): string => {
  return `${process.env.NEXT_PUBLIC_API_PATH}${url}`;
};

const request = async <TData>(
  url: string,
  options?: ApiRequestConfig
): Promise<APIResponse<TData>> => {
  url = createApiUrl(url);

  const response = axios
    .request<APIResponse<TData>>({
      url,
      ...options,
    })
    .then((response) => {
      // - If response contains Set-Cookie headers, set cookies to browser
      if (response.headers["Set-Cookie"]) {
        const cookies = response.headers["Set-Cookie"];
        console.log("cookies", cookies);
      }

      return response.data;
    })
    .catch((error: APIError) => {
      throw error;
    });

  return response;
};

export type { ApiRequestConfig };
export default request;

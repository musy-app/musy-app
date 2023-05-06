import { APIError, APIResponse } from "@musy-app/shared-types";
import axios, { AxiosRequestConfig } from "axios";

type ApiRequestConfig = Exclude<AxiosRequestConfig, "method">;

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_PATH,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 6000,
  transformRequest: [
    function (data) {
      return JSON.stringify(data);
    },
  ],
});

const request = async <TData>(
  url: string,
  options?: ApiRequestConfig
): Promise<APIResponse<TData>> => {
  const response = instance<APIResponse<TData>>(url, { ...options })
    .then((response) => {
      console.log("response", response);

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

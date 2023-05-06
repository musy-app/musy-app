import { APIResponse } from "@musy-app/shared-types";
import * as cookieCutter from "cookie-cutter";
import request, { ApiRequestConfig } from "./request";

const createAuthHeaders = (jwtToken: string) => ({
  Authorization: `${
    process.env.NEXT_PUBLIC_AUTH_PREFIX || "Bearer"
  } ${jwtToken}`,
});

type BaseRequest = <TData>(
  url: string,
  options?: ApiRequestConfig
) => Promise<APIResponse<TData>>;

type RequestResponse = {
  get: BaseRequest;
  post: BaseRequest;
  put: BaseRequest;
  delete: BaseRequest;
};

const requester = async (): Promise<RequestResponse> => {
  let baseOptions: ApiRequestConfig = {};

  if (cookieCutter.get("access_token")) {
    const jwtToken = cookieCutter.get("access_token");

    baseOptions = {
      ...baseOptions,
      headers: {
        ...createAuthHeaders(jwtToken),
      },
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const get: BaseRequest = async <TData = any>(
    url: string,
    options?: ApiRequestConfig
  ): Promise<APIResponse<TData>> =>
    request<TData>(url, { ...baseOptions, ...options, method: "GET" });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const post: BaseRequest = async <TData = any>(
    url: string,
    options?: ApiRequestConfig
  ): Promise<APIResponse<TData>> =>
    request<TData>(url, { ...baseOptions, ...options, method: "POST" });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const put: BaseRequest = async <TData = any>(
    url: string,
    options?: ApiRequestConfig
  ): Promise<APIResponse<TData>> =>
    request<TData>(url, { ...baseOptions, ...options, method: "PUT" });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const del: BaseRequest = async <TData = any>(
    url: string,
    options?: ApiRequestConfig
  ): Promise<APIResponse<TData>> =>
    request<TData>(url, { ...baseOptions, ...options, method: "DELETE" });

  return {
    get,
    post,
    put,
    delete: del,
  };
};

export default requester;

import { AxiosRequestConfig } from "axios";

export interface Fetcher<D = any> {
  url: string;
  params?: AxiosRequestConfig["params"];
  body?: AxiosRequestConfig<D>["data"];
  headers?: AxiosRequestConfig<D>["headers"];
}

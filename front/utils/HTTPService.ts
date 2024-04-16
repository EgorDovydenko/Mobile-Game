import axios, { AxiosError } from "axios";
import * as SecureStore from "expo-secure-store";

import { API_URL } from "@env";
import { Fetcher } from "./types";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(async (req) => {
  const token = await SecureStore.getItemAsync("auth_token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

class HTTPService {
  public async getFetcher<Data>({
    url,
    params,
    headers,
  }: Omit<Fetcher, "body">): Promise<Data> {
    return api.get(url, { params, headers }).then((res) => res.data);
  }

  public async postFetcher<Data, Body = any>({
    url,
    body,
    params,
    headers,
  }: Fetcher<Body>): Promise<Data> {
    return api
      .post(url, body, { params, headers })
      .then((res) => res.data)
      .catch((error: AxiosError) => {
        throw error.response?.data;
      });
  }
}

export default new HTTPService();

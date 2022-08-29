import { ListResponse, ListParams } from "@src/models";
import axiosClient from "./axiosClient";

const authApi = {
  signup(params: ListParams): Promise<any> {
    const url = "auth/signup";
    return axiosClient.post(url, params);
  },
  login(params: ListParams): Promise<any> {
    const url = "auth/login";
    return axiosClient.post(url, params);
  },
  verifyToken(): Promise<any> {
    const url = "auth/verify-token";
    return axiosClient.post(url);
  },
};

export default authApi;

import React, { createContext } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

const baseUrl = "https://dark-jade-caridea-sari.cyclic.app";
//const baseUrl = 'https://zzsl5m-8081.csb.app';
//const baseUrl = 'http://localhost:8081';

export const serverURL = (url: string) => `${baseUrl}${url}`;

const context = React.createContext<any>(null);
export const Provider = context.Provider;
export const Consumer = context.Consumer;

export const fetchData = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "POST",
  dataForServer: any = undefined,
  withCredentials: boolean = false
): Promise<T | any> => {
  dataForServer = { ...dataForServer, key: "romanbr87" };
  const requestOptions: any = {
    method,
    headers: { "Content-Type": "application/json" },
    data: dataForServer,
    withCredentials,
  };

  try {
    const { data } = await axios(url, requestOptions);
    return data as T;
  } catch (error) {
    console.log(error);
    //console.log(`url: ${url}`);
    /*const customError = new Error(
      error.response?.data?.message || "Unknown Error"
    );
    throw customError;*/
  }
};

export const getPost = async <T>(
  url: string,
  data: any = undefined
): Promise<T | any> => {
  return await fetchData<T>(url, "POST", data);
};

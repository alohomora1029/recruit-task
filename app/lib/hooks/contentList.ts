import React, { useState } from "react";
import axios,{AxiosError} from "axios";
import { API_HOST } from "../constants/common";

export function useContentList() {
  const [data, setData] = useState<GetContentList[]>([]);

  const contentList = async () => {
    try {
      const res = await axios.get(`${API_HOST}/content`);
      const jsonData: GetContentList[] = await res.data
      setData(jsonData);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log(axiosError.message);
    }
  };
  return { contentList, data };
}

export function usePostContentList() {

  const postContentList = async (request:PostContentList[]) => {
    try {
     await axios.post(`${API_HOST}/content`,request)
    } catch (error) {
        const axiosError = error as AxiosError
      console.log(axiosError);
    }
  };
  return { postContentList };
}

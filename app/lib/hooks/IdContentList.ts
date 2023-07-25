import { API_HOST } from "../constants/common";
import axios, { AxiosError } from "axios";
import { useState } from "react";

//get
export function useGetIdContentList() {
  const [titleData, setTitleData] = useState("");
  const [bodyData, setBodyData] = useState("");
  const getIdContentList = async (bookListId: number) => {
    try {
      const res = await axios.get(`${API_HOST}/content/${bookListId}`);
      const titleData = await res.data.title;
      const bodyData = await res.data.body;
      setTitleData(titleData);
      setBodyData(bodyData);
    } catch (e) {
      const axiosError = e as AxiosError;
      console.log(axiosError);
    }
  };
  return { getIdContentList, titleData, bodyData };
}
//put
export function usePutIdContentList() {
  const [data, setData] = useState<contentList[]>([]);
  const putIdContentList = async (
    bookListId: number,
    request: putIdContentList
  ) => {
    try {
      const res = await axios.put(`${API_HOST}/content/${bookListId}`, request);
      setData([res.data]);
    } catch (e) {
      const axiosError = e as AxiosError;
      console.log(axiosError);
    }
  };
  return { putIdContentList, data };
}
//delete
export function useDeleteIdContentList() {
  const deleteIdContentList = async (bookListId: number) => {
    try {
      await axios.request({
        method: "delete",
        url: `${API_HOST}/content/${bookListId}`,
        data: { id: bookListId },
      });
    } catch (e) {
      const axiosError = e as AxiosError;
      console.log(axiosError);
    }
  };
  return { deleteIdContentList };
}

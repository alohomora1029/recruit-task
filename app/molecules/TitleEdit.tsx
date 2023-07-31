import React, { useEffect, useState } from "react";
import EditButton from "../atoms/EditButton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { hoverList } from "../atoms/recoil/hoverList";
import CancelButton from "../atoms/CancelButton";
import SaveButton from "../atoms/SaveButton";
import {
  useGetIdContentList,
  usePutIdContentList,
} from "../lib/hooks/IdContentList";
import { EditData } from "../atoms/recoil/EditData";
import { useContentList } from "../lib/hooks/contentList";

export default function TitleEdit() {
  const [data, setData] = useState<contentList[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState("");
  const [inputId, setInputId] = useState<number>(0);
  const hoverData = useRecoilValue(hoverList);
  const setEditListData = useSetRecoilState(EditData);

  const { contentList, data: getAllData } = useContentList();

  const { putIdContentList, data: putData } = usePutIdContentList();
  const { getIdContentList, titleData } = useGetIdContentList();

  const handleEdit = (id: number) => {
    getIdContentList(id);
    setInputId(id);
    setIsEditing(true);
  };

  const handleSave = () => {
    putIdContentList(inputId, { title: input, body: hoverData[0].body });
    contentList();
    setInput('');
  };

  useEffect(() => {
    setData(hoverData);
  }, [hoverData]);

  useEffect(() => {
    setInput(titleData);
  }, [titleData]);

  useEffect(() => {
    (async () => await contentList())();
    setData(putData);
    setEditListData(getAllData);
    setIsEditing(false);
  }, [putData]);

  return (
    <div className="flex w-full">
      {isEditing ? (
        <>
          <input
           className="px-[30px] w-full text-title rounded-[8px]"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex justify-end pl-[20px] space-x-[10px]">
            <CancelButton onClick={() => setIsEditing(false)} />
            <SaveButton onClick={() => handleSave()} />
          </div>
        </>
      ) : (
        <>
          {data.map((result) => (
            <div className="flex w-full" key={result.id}>
              <div className="px-[30px] w-full text-title">{result.title}</div>
              <div className="justify-end pl-[20px]">
                <EditButton onClick={() => handleEdit(result.id)} />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

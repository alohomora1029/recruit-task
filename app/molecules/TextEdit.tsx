import React, { useEffect, useState } from "react";
import EditButton from "../atoms/EditButton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { hoverList } from "../atoms/recoil/hoverList";
import {
  useGetIdContentList,
  usePutIdContentList,
} from "../lib/hooks/IdContentList";
import CancelButton from "../atoms/CancelButton";
import SaveButton from "../atoms/SaveButton";

export default function TextEdit() {
  const [data, setData] = useState<contentList[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState("");
  const [inputId, setInputId] = useState<number>(0);
  const hoverData = useRecoilValue(hoverList);

  const { putIdContentList, data: putData } = usePutIdContentList();
  const { getIdContentList, bodyData } = useGetIdContentList();

  const handleEdit = (id: number) => {
    getIdContentList(id);
    setInputId(id);
    setIsEditing(true);
  };
  const handleSave = () => {
    putIdContentList(inputId, { title: hoverData[0].title, body: input });
  };

  useEffect(() => {
    setData(hoverData);
  }, [hoverData]);

  useEffect(() => {
    setInput(bodyData);
  }, [bodyData]);

  useEffect(() => {
    setData(putData);
    setIsEditing(false);
  }, [putData]);

  return (
    <div className="pt-[20px] h-full">
      {isEditing ? (
        <>
          <div className="flex h-full">
            <textarea
              className="w-full min-h-fit text-body pt-[30px] px-[30px] mb-[30px] bg-white rounded-[8px] resize-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="flex justify-end pl-[20px] space-x-[10px]">
              <CancelButton onClick={() => setIsEditing(false)} />
              <SaveButton onClick={() => handleSave()} />
            </div>
          </div>
        </>
      ) : (
        <>
          {data.map((result) => (
            <div className="flex h-full" key={result.id}>
              <textarea
                className="w-full min-h-fit text-body pt-[30px] px-[30px] mb-[30px] bg-white rounded-[8px] resize-none"
                defaultValue={result.body}
                disabled
              />
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

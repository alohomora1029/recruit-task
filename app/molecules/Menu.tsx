import { useEffect, useState } from "react";
import EditButton from "../atoms/EditButton";
import { useContentList, usePostContentList } from "../lib/hooks/contentList";
import TrashButton from "../atoms/TrashButton";
import NewPageButton from "../atoms/NewPageButton";
import DoneButton from "../atoms/DoneButton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { hoverList } from "../atoms/recoil/hoverList";
import { useDeleteIdContentList } from "../lib/hooks/IdContentList";
import { EditData } from "../atoms/recoil/EditData";

export default function Menu() {
  const setHoverData = useSetRecoilState(hoverList);
  const editData = useRecoilValue(EditData);
  const [input, setInput] = useState<GetContentList[]>([]);
  const [data, setData] = useState<GetContentList[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const { contentList, data: listData } = useContentList();
  const { postContentList } = usePostContentList();

  const { deleteIdContentList } = useDeleteIdContentList();

  const handleInput = () => {
    setInput(data);
    setIsEditing(true);
  };

  const handlePostNewPage = () => {
    postContentList([{ title: "", body: "" }]);
  };

  const handleDelete = (id: number) => {
    const removedItem = input.filter((item) => {
      return item.id !== id;
    });
    deleteIdContentList(id);
    setInput(removedItem);
  };

  useEffect(() => {
    (async () => {
      await contentList();
    })();
  }, [isEditing, editData,input]);

  useEffect(() => {
    setData(listData);
  }, [listData]);

  useEffect(() => {
    setInput(listData);
  }, [listData]);

  return (
    <>
      {isEditing ? (
        <div className="mt-[20px] mr-[10px] h-screen">
          {input?.map((result) => (
            <div className="flex items-center h-[44px]" key={result.id}>
              <button
                className=" disabled:block h-[44px] w-full text-start hover:font-bold hover:text-main hover:bg-light hover:rounder-[4px]"
                onMouseEnter={() => setHoverData([result])}
              >
                {result.title}
              </button>
              <div className="pl-[10px]">
                <TrashButton onClick={() => handleDelete(result.id)} />
              </div>
            </div>
          ))}
          <div className="flex justify-end space-x-[10px]">
            <NewPageButton onClick={handlePostNewPage} />
            <DoneButton onClick={() => setIsEditing(false)} />
          </div>
        </div>
      ) : (
        <>
          <div className="mt-[20px]">
            {data.map((result) => (
              <div className="flex" key={result.id}>
                <button
                  className=" disabled:block h-[44px] w-full text-start hover:font-bold hover:text-main hover:bg-light hover:rounder-[4px]"
                  onMouseEnter={() => setHoverData([result])}
                >
                  {result.title}
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <EditButton onClick={handleInput} />
          </div>
        </>
      )}
    </>
  );
}

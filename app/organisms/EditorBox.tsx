import React from "react";
import TitleEdit from "../molecules/TitleEdit";
import TextEdit from "../molecules/TextEdit";

export default function EditorBox() {
  return (
    <div className="h-screen w-screen py-[30px] pr-[40px]">
      <div className="bg-light p-[30px] h-full w-full rounded">
        <TitleEdit/>
        <TextEdit/>
      </div>
    </div>
  );
}

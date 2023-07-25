import React from "react";
import Image from "next/image";
import cancelButton from "./design/cancel.svg";

export default function CancelButton({ onClick }: ClickType) {
  return (
    <div>
      <button
        className="bg-buttonNormal h-[40px] min-w-[40px] flex flex-col justify-center items-center rounded hover:bg-gray-400 active:bg-gray-700 disabled:bg-opacity-25"
        onClick={onClick}
      >
        <Image src={cancelButton} width={24} height={24} alt="cancelButton" />
        <p className="text-[10px] text-white">Cancel</p>
      </button>
    </div>
  );
}

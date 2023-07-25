import React from "react";
import SideBarTitle from "../molecules/SideBarTitle";
import Menu from "../molecules/Menu";

export default function SideBar() {
  return (
    <>
      <div className="pt-[30px] pl-[40px] h-screen min-w-fit">
        <SideBarTitle />
        <Menu />
      </div>
      <div className="border-e-[1px] border-[#F5F8FA] pl-[10px] mr-[40px]"></div>
    </>
  );
}

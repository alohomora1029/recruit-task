"use client"
import SideBar from "../organisms/SideBar"
import EditorBox from "../organisms/EditorBox"

export default function home() {
  return (
    <div className="flex max-h-screen">
    <SideBar/>
    <EditorBox/>
    </div>
  )
}

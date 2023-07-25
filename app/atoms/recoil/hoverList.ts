import {atom} from "recoil";

export const hoverList = atom({
    key:"hoverList",
    default:[{
        id:0,
        title:"",
        body:"",
        createdAt:"",
        updatedAt:"",
    }]
})

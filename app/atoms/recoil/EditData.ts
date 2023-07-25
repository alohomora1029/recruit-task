import {atom} from "recoil";

export const EditData = atom({
    key:"EditData",
    default:[{
        id:0,
        title:"",
        body:"",
        createdAt:"",
        updatedAt:"",
    }]
})

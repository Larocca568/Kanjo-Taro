'use client';
import{Noto_Sans} from"next/font/google";
import Image from "next/image";
import { useState } from "react";
import {ImAngry} from "react-icons/im";
import { ImBaffled } from "react-icons/im";
const NotoSans = Noto_Sans({
    weight:"400",
    subsets:["latin"],
});
export default function EditPage(){
    
    return(
    <div className={NotoSans.className}> 
    <div className="loginheader border-b border-b-gray-400 border-b-2">
      <p className="header">ものづくり会計サービス「Kanjo Taro」</p>
    </div> 
    <div className="container">
    <div className="main flex">
        <div className="m-5 bg-sky-100 w-117 h-50 rounded-sm flex-none shadow-sm">
            <h1 className="px-3">今月の収支</h1>
            <hr className="w-38"></hr>
            <ImAngry size="8rem" className="p-4" />
        </div>
        <div className="m-5 bg-sky-100 w-117 h-50 rounded-sm flex-none shadow-sm">
            <h1 className="px-3">今年度の収支</h1>
            <hr className="w-44"></hr>
            <ImBaffled size="8rem" className="p-4" />
        </div>
    </div>
    </div>
    </div>
    );
};
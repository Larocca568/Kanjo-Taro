'use client';
import{Noto_Sans} from"next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import {ImAngry} from "react-icons/im";
import { PiBandaids } from "react-icons/pi";
import { SiNamesilo } from "react-icons/si";
import { text } from "stream/consumers";
const NotoSans = Noto_Sans({
    weight:"400",
    subsets:["latin"],
});
export default function EditPage(){
    interface Member{
        name:string;
        money:string;
    }
    const [name, setName] = useState<string>('');
    const[money,setMoney] = useState<string>('');
    const changeName= (e:React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value)
        console.log(name)
    };
    const [paid,setpaid] = useState<string[]>([]);

    const addname = () => {
        const paidname = [...paid]
        paidname.push(name);
        setpaid(paidname);
        setName("");
    };

    return(
        <div className={NotoSans.className}> 
        <div className="loginheader border-b border-b-gray-400 border-b-2">
        <p className="header">ものづくり会計サービス「Kanjo Taro」</p>
        </div> 
        <div>
        <p>部費の管理</p>
        <form>
            <label htmlFor="Name">部員の名前</label>
            <input type="text" id="name" required value={name} onChange={changeName}></input>
            <label htmlFor="Money">金額</label>
            <input type="number" id="money" required></input>
            <button onClick={addname} type="submit">OK</button>
        </form>
        <div>
            {paid.map((paid) =>(
                <li key={paid}>
                    {paid}
                </li>
            ))}
        </div>
        </div>
        </div>
    )
}
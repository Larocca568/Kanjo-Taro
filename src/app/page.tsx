import{Noto_Sans} from'next/font/google';
import Link from'next/link';
import Image from "next/image";

const NotoSans = Noto_Sans({
    weight:"400",
    subsets:["latin"],
});
export default function EditPage(){
    return(
    <div className="body">
    <div className={NotoSans.className}>
    <div className="loginheader">
      <p className="header">ものづくり会計サービス「Kanjo Taro」</p>
    </div> 
    <div className="edit">
        <h1>ログイン</h1>
        <hr></hr>       
        <form className="flex items-center space-x-4">
            <label htmlFor="name">User Name</label>
            <input type="text" id="name"></input>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"></input>
            <button type="submit">Login</button>
        </form>
        <Link href="/edit">
        <button>メニュー画面へ</button>
        </Link>

    </div>
    </div>
    </div>
    );
};
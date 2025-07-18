import React from 'react';
import Link from'next/link';
import{Noto_Sans} from"next/font/google";
const NotoSans = Noto_Sans({
    weight:"400",
    subsets:["latin"],
});

type SidebarProps = {
  isCollapsed:boolean;
  onToggle: () => void;
};


const Sidebar = () => {

  return (
    <div className={NotoSans.className}>
    <aside className="w-50 bg-sky-200 p-2 h-screen text-center" >
      <Link href="/edit"><h1>Main Page</h1></Link>
      <Link href="/edit/buhi"><h1>収支管理</h1></Link>

    </aside>
    </div>
  );

};



export default Sidebar;

'use client'
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import {Menu} from 'antd';
import { AdminContext } from '@/Context';
import { adminauth } from '@/app/auth';
import axios from 'axios';


const topMenu = [
  { key: 'home', label: 'Dashboard'},
  { key: 'about', label: 'Settings'},
  { key: 'tasks', label: 'Tasks'},
  { key: 'accounts', label: 'Accounts'},
  { key: 'site', label: 'Site'},
  { key: 'logout', label: 'Logout'}
];

const App = () => {
  const [load, setLoad] = useState(0);
  const {dispatch} = useContext(AdminContext);
  const router = useRouter();

  const handleTopMenu = async (e:any) => {
    if(e.key==='logout'){
        const response = await axios.get('/api/admin/logout');
        dispatch({type:"logout"});
        localStorage.removeItem("admin");
        router.push('/admin/login');
      }
  };

  useEffect(()=>{
    adminauth().then((res)=>{
        if(res?.authorized!==false){
            setLoad(1)
        }else{
            router.push("/");
        }
    })
},[load])

  return (
    <div className="nt-component nt-top-nav">
      <Menu
        onClick={handleTopMenu}
        className='nt-component-top-menu w-full'
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={topMenu}
      />
    </div>
  )
}

export default App
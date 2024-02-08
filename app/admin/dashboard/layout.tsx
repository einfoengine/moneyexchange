'use client'
import {Layout, Menu } from 'antd';
import { useRouter } from 'next/navigation';
import Link from "next/link"
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AdminContext } from '@/Context';
import { adminauth } from '@/app/auth';

// import PageProtector from '@/components/PageProtector';
const { Header, Footer } = Layout;

const topMenu = [
    { key: 'home', label: 'Dashboard'},
    { key: 'about', label: 'Settings'},
    { key: 'tasks', label: 'Tasks'},
    { key: 'accounts', label: 'Accounts'},
    { key: 'site', label: 'Site'},
    { key: 'logout', label: 'Logout'}
];

export default function RootLayout({children}: {children: React.ReactNode}){
    const [load, setLoad] = useState(0)
    const {dispatch} = useContext(AdminContext);
    const router = useRouter();
    
    useEffect(()=>{
        adminauth().then((res)=>{
            if(res?.authorized!==false){
                setLoad(1)
            }else{
                router.push("/");
            }
        })
    },[load])


    const handleTopMenu = async (e:any) => {
        if(e.key==='logout'){
            const response = await axios.get('/api/admin/logout');
            dispatch({type:"logout"});
            localStorage.removeItem("admin");
            router.push('/admin/login');
        }
    };
    if(load!==0){
        return (
            <div>
                <Header className='grid grid-cols-12 nt-top mb-3'>
                    <div className="nt-brand col-span-2">
                        <h1 className="nt-logo"><Link href={'/'} >Logo</Link></h1>
                    </div>
                    <Menu
                        onClick={handleTopMenu}
                        className='nt-top-menu col-span-10'
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={topMenu}
                    />
                </Header>
                    {children}
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </div>
        )
    }
}

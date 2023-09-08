'use client'
import {Layout, Menu } from 'antd';
import { useRouter } from 'next/navigation';
import Link from "next/link"
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AdminContext } from '@/Context';

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
    const {state,dispatch} = useContext(AdminContext);
    const router = useRouter();

    const handleTopMenu = async (e:any) => {
        if(e.key==='logout'){
            const response = await axios.get('/api/admin/logout');
            dispatch({type:"logout"});
            localStorage.removeItem("admin");
            router.push('/admin/login');
        }
    };
    return (
            <div>
                <Header className='grid grid-cols-12 nt-top'>
                    <div className="nt-brand col-span-2">
                        <h1 className="nt-logo text-white"><Link href={'/'} >Logo</Link></h1>
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

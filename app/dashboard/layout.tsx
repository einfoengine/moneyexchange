'use client'
import axios from 'axios';
import {Layout, Menu } from 'antd';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { userauth, adminauth } from '../auth';
import { useEffect, useState } from 'react';

const { Header, Footer } = Layout;

const topMenu = [
    { key: 'home', label: <Link href={"/"}>Home</Link>,},
    // { key: 'about', label: 'Settings'},
    // { key: 'contact', label: 'Tasks'},
    // { key: 'contact', label: 'Accounts'},
    // { key: 'contact', label: 'Site'},
    { key: 'logout', label: 'Logout'}
];

export default function RootLayout({children, user}: {children: React.ReactNode, user:any}){
    const [load, setLoad] = useState(0);
    const router = useRouter();
    useEffect(()=>{
        userauth().then((res)=>{
            if(res.authorized!==false){
                setLoad(1);
            }else{
                router.push("/");
            }
        });
    },[])

    const handleTopMenu = async (e:any) => {
        if(e.key==='logout'){
            const response = await axios.get('/api/users/user/logout');
            
            localStorage.removeItem("user");
            router.push('/');
        }
    };
    if(load===1){
        return (
            <div className='nt-admin'>
                <Header className='grid grid-cols-12 nt-top'>
                    <div className="nt-brand col-span-2">
                        <h1 className="nt-logo"><Link href={"/"}>Logo</Link></h1>
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

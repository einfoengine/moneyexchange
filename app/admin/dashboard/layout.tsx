'use client'
import {Layout, Menu, Breadcrumb, Divider } from 'antd';
import { useRouter } from 'next/navigation';
import Link from "next/link"
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AdminContext } from '@/Context';
import { adminauth } from '@/app/auth';

const { Content} = Layout;

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
const asideMenu = [
    { key: 'dashboard', label: (<Link href="/admin/dashboard">Dashboard</Link>) },
    { key: 'dashboard', label: (<Link href="/admin/dashboard/articles">Articles</Link>) },
    { key: 'orders', label: (<Link href="/admin/dashboard/orders">Orders</Link>) },
    { key: 'transactions', label: (<Link href="/admin/dashboard/transections">Transactions</Link>) },
    { key: 'price', label: (<Link href="/admin/dashboard/price">Price</Link>) },
    { key: 'message', label: (<Link href="/admin/dashboard/inbox">Message</Link>) },
    { key: 'users', label: (<Link href="/admin/dashboard/users">Users</Link>) },
    { key: 'profile', label: 'Profile' },
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
                <Content style={{ padding: '0 50px' }}>
                    <div className="nt-main grid grid-cols-12 gap-3">
                        <div className="nt-aside col-span-2">
                            <Menu
                                mode="inline"
                                items={asideMenu}
                            />
                        </div>
                        <div className="nt-content col-span-10 overflow-hidden rounded-2xl ml-3">
                            {children}
                        </div>
                    </div>
                    
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </div>
        )
    }
}

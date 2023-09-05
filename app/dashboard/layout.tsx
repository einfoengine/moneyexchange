'use client'
import axios from 'axios';
import {Layout, Menu } from 'antd';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// import PageProtector from '@/components/PageProtector';

const { Header, Footer } = Layout;

const topMenu = [
    { key: 'home', label: <Link href={"/"}>Home</Link>,},
    // { key: 'about', label: 'Settings'},
    // { key: 'contact', label: 'Tasks'},
    // { key: 'contact', label: 'Accounts'},
    // { key: 'contact', label: 'Site'},
    { key: 'logout', label: 'Logout'}
];

export default function RootLayout({children}: {children: React.ReactNode}){
    // PageProtector();
    const router = useRouter();
    const handleTopMenu = async (e:any) => {
        console.log(e.key);
        if(e.key==='logout'){
            const response = await axios.get('/api/users/user/logout');
            
            localStorage.removeItem("user");
            router.push('/');
        }
    };
    return (
            <div>
                <Header className='grid grid-cols-12 nt-top'>
                    <div className="nt-brand col-span-2">
                        <h1 className="nt-logo text-white">Logo</h1>
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

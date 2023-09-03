'use client'
import {Layout, Menu } from 'antd';
import {adminContext} from '@/Context'
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
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
    // PageProtector();
    const {state, dispatch} = useContext(adminContext);
    const router = useRouter();
    if(state.user===null){
        router.push("/admin/login")
        return(
            <div>
                <h3>Authentication failed please login</h3>
            </div>
        )
    }
    const handleTopMenu = async (e:any) => {
        console.log(e.key);
        if(e.key==='logout'){
            console.log(localStorage.getItem("user"))
            const response = await axios.get('/api/admin/logout');
            console.log("Logout response: ", response);
            dispatch({
                type: "logout"
            });
            localStorage.removeItem("user");
            router.push('/admin/login');
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

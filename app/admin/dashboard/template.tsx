'use client'
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Divider } from 'antd';
import BreadCrumb from '../../../components/BreadCrumb';
import {LoginContext} from '@/Context'
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
const { Header, Content, Footer, Sider } = Layout;

const topMenu = [
    { key: 'home', label: 'Dashboard'},
    { key: 'about', label: 'Settings'},
    { key: 'contact', label: 'Tasks'},
    { key: 'contact', label: 'Accounts'},
    { key: 'contact', label: 'Site'},
    { key: 'logout', label: 'Logout'}
];

  const asideMenu = [
    { key: 'dashboard', label: (<a href="/admin/dashboard">Dashboard</a>) },
    { key: 'orders', label: (<a href="/admin/dashboard/orders">Orders</a>) },
    { key: 'transactions', label: (<a href="/admin/dashboard/transections">Transactions</a>) },
    { key: 'price', label: (<a href="/admin/dashboard/price">Price</a>) },
    { key: 'message', label: (<a href="/admin/dashboard/inbox">Message</a>) },
    { key: 'users', label: (<a href="/admin/dashboard/users">Users</a>) },
    { key: 'profile', label: 'Profile' },
  ];

const Template:React.FC<{children: React.ReactNode}> = ({children}) => {
    const {state, dispatch} = useContext(LoginContext);
    const router = useRouter();
    
    const handleTopMenu = async (e:any) => {
        
        // Handle logout
        if(e.key==='logout'){
            const response = await axios.get('/api/admin/logout');
            console.log("Logout response: ", response);
            dispatch({
                type: "logout"
            });
            localStorage.removeItem("user");
            router.push('/admin/login');
        }
    };

    return(
        <div className="nt-dashboard">
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
            {/* End top */}
            <Content style={{ padding: '0 50px' }}>
                {/* <BreadCrumb/> */}
                <Divider/>
                {/* End breadcrumb */}
                <div className="nt-main grid grid-cols-12">
                    <div className="nt-aside col-span-2">
                        <Menu
                            mode="inline"
                            // defaultSelectedKeys={['1']}
                            // defaultOpenKeys={['sub1']}
                            // style={{ height: '100%' }}
                            items={asideMenu}
                        />
                    </div>
                    <div className="nt-content col-span-10">
                        {children}
                    </div>
                </div>
                
            </Content>
            {/* End main */}
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            {/* End footer */}
        </div>
    );
}
export default Template


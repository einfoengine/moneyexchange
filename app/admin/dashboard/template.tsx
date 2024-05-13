'use client'
import { Breadcrumb, Layout, Menu, Divider } from 'antd';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const { Content} = Layout;



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

const Template:React.FC<{children: React.ReactNode}> = ({children}) => {
    const router = useRouter();

    

    return(
        <div className="nt-dashboard">
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
        </div>
    );
}
export default Template


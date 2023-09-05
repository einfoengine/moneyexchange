'use client'
import { Breadcrumb, Layout, Menu, Divider } from 'antd';
import { useRouter } from 'next/navigation';
const { Content} = Layout;


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
    const router = useRouter();

    

    return(
        <div className="nt-dashboard">
            
            {/* End top */}
            <Content style={{ padding: '0 50px' }}>
                {/* <BreadCrumb/> */}
                <Divider/>
                {/* End breadcrumb */}
                <div className="nt-main grid grid-cols-12">
                    <div className="nt-aside col-span-2">
                        <Menu
                            mode="inline"
                            items={asideMenu}
                        />
                    </div>
                    <div className="nt-content col-span-10">
                        {children}
                    </div>
                </div>
                
            </Content>
            {/* End main */}
            
            {/* End footer */}
        </div>
    );
}
export default Template


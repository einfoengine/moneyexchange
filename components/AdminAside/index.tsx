'use client'
import Link from "next/link";
import {Menu} from 'antd';

const asideMenu = [
    { key: 'dashboard', label: (<Link href="/admin/dashboard">Dashboard</Link>) },
    { key: 'articles', label: (<Link href="/admin/dashboard/articles">Articles</Link>) },
    { key: 'orders', label: (<Link href="/admin/dashboard/orders">Orders</Link>) },
    { key: 'transactions', label: (<Link href="/admin/dashboard/transections">Transactions</Link>) },
    { key: 'price', label: (<Link href="/admin/dashboard/price">Price</Link>) },
    { key: 'message', label: (<Link href="/admin/dashboard/inbox">Message</Link>) },
    { key: 'users', label: (<Link href="/admin/dashboard/users">Users</Link>) },
    { key: 'profile', label: 'Profile' },
];

const App = () => {
  return (
    <div className='nt-component nt-admin-aside'>
        <Menu
            mode="inline"
            items={asideMenu}
        />
    </div>
  )
}

export default App
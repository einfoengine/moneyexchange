'use client'
import {Layout} from 'antd';
const { Header, Footer } = Layout;
import AdminTopNav from '@/components/AdminTopNav';

const App = () => {
  return (
    <div className="nt-component nt-admin-header">
      <Header className='grid grid-cols-12 nt-top mb-3'>
        <div className="nt-brand col-span-2">
            <h1 className="nt-logo">Logo</h1>
        </div>
        <div className="nt-brand col-span-10">
            <AdminTopNav/>
        </div>
      </Header>
    </div>
  )
}

export default App
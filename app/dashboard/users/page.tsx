'use client'
import { Layout } from 'antd';
import UserListTable from '@/components/Users';

const { Content } = Layout;

const HomePage = () => {
  return (
    <Layout>
      <Content style={{ padding: '50px', background: '#fff' }}>
        <h1>User List Table</h1>
        <UserListTable/>
      </Content>
    </Layout>
  );
};

export default HomePage;
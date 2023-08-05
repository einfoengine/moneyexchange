'use client'
// pages/index.js
import { Layout } from 'antd';
import OrdersTable from '@/components/OrdersTable';

const { Content } = Layout;

const Orders = () => {
  return (
    <Layout>
      <Content style={{ padding: '50px', background: '#fff' }}>
        <h1>Orders Table</h1>
        <OrdersTable/>
      </Content>
    </Layout>
  );
};

export default Orders;

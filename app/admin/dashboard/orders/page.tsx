'use client'
// pages/index.js
import { Layout } from 'antd';
import OrdersProcessingTable from '@/components/OrdersProcessingTable';

const { Content } = Layout;

const Orders = () => {
  return (
    <Layout>
      {/* <Content style={{ padding: '50px', background: '#fff' }}> */}
        <OrdersProcessingTable/>
      {/* </Content> */}
    </Layout>
  );
};

export default Orders;

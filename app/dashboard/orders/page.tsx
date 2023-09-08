'use client'
// pages/index.js
import { Layout } from 'antd';
import OrdersTable from '@/components/OrdersTable';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const { Content } = Layout;

const Orders = () => {
  return (
    <Layout>
      {/* <Content> */}
        <OrdersTable/>
      {/* </Content> */}
    </Layout>
  );
};

export default Orders;

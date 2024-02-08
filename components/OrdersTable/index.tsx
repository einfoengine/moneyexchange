'use client'

import { Table } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface OrderData {
  orderId: string;
  customerName: string;
  currency: string;
  orderType: string;
  orderAmount: number;
  orderPrice: number;
  orderStatus: string;
  phoneNumber: string;
}

const columns = [
  {
    title: 'Order ID',
    dataIndex: 'orderId',
  },
  {
    title: 'Customer Name',
    dataIndex: 'customerName',
  },
  {
    title: 'Email Address',
    dataIndex: 'email',
  },
  {
    title: 'Order Type',
    dataIndex: 'orderType',
  },
  {
    title: 'Currency',
    dataIndex: 'currency',
  },
  {
    title: 'Order Amount',
    dataIndex: 'orderAmount',
  },
  {
    title: 'Rate',
    dataIndex: 'orderRate',
  },
  {
    title: 'Total Amount',
    dataIndex: 'orderPrice',
  },
  {
    title: 'Order Status',
    dataIndex: 'orderStatus',
  },
  // {
  //   title: 'Action',
  //   render: (_: any, record: OrderData) => (
  //     <Button type="primary" onClick={() => handleApprove(record)}>
  //       Approve
  //     </Button>
  //   ),
  // },
];

const OrdersTable: React.FC = () => {
  const [data, setData] = useState<OrderData[]>([]); // Initialize with an empty array of OrderData

  useEffect(() => {
    axios.get(`/api/orders/user?user=${JSON.parse(localStorage.getItem("user"))._id}`)
      .then((response) => {
        if (response) {
          console.log(response.data)
          const modifiedData = response.data.map((order) => ({
            orderId: order._id,
            customerName: order.user.username,
            currency: order.currency.flag + ' ' + order.currency.code,
            orderType: order.type,
            orderAmount: order.amount,
            orderRate: order.rate,
            orderPrice: order.total,
            orderStatus: order.status,
            email: order.user.email,
          }));
          setData(modifiedData);
        }
      })
      .catch((err) => {
        console.log("Order data parse error: ", err);
      });
  }, []);

  const handleApprove = (record: OrderData) => {
    console.log(`Order ${record.orderId} approved!`);
  };

  return (
      <Table dataSource={data} columns={columns}/>
  );
};

export default OrdersTable;

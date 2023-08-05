'use client'

import { Table, Button } from 'antd';

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

const data: OrderData[] = [
  {
    orderId: '1001',
    customerName: 'John Doe',
    currency: 'USD',
    orderType: 'Buy',
    orderAmount: 1000,
    orderPrice: 110.25,
    orderStatus: 'Pending',
    phoneNumber: '123-456-7890',
  },
  // Add more order data as needed
];

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
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
  },
  {
    title: 'Currency',
    dataIndex: 'currency',
  },
  {
    title: 'Order Type',
    dataIndex: 'orderType',
  },
  {
    title: 'Order Amount',
    dataIndex: 'orderAmount',
  },
  {
    title: 'Order Price',
    dataIndex: 'orderPrice',
  },
  {
    title: 'Order Status',
    dataIndex: 'orderStatus',
  },
  {
    title: 'Action',
    render: (_: any, record: OrderData) => (
      <Button type="primary" onClick={() => handleApprove(record)}>
        Approve
      </Button>
    ),
  },
];

const OrdersTable: React.FC = () => {
  const handleApprove = (record: OrderData) => {
    // Your logic for approving the order goes here
    console.log(`Order ${record.orderId} approved!`);
  };

  return <Table dataSource={data} columns={columns} />;
};

export default OrdersTable;

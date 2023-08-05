
// components/TransactionTable.js
import React from 'react';
import { Table } from 'antd';

const data = [
  {
    date: '2023-08-03',
    customerId: 'C001',
    customerName: 'John Doe',
    phoneNumber: '+1234567890',
    transactionCount: 3,
    orderType: 'Online',
    orderAmount: 150,
    orderCurrency: 'USD',
  },
  // Add more data rows as needed
];

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Customer ID',
    dataIndex: 'customerId',
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
    title: 'Transaction Count',
    dataIndex: 'transactionCount',
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
    title: 'Order Currency',
    dataIndex: 'orderCurrency',
  },
];

const TransactionTable = () => {
  return <Table dataSource={data} columns={columns} />;
};

export default TransactionTable;

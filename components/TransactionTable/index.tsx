
// components/TransactionTable.js
import React from 'react';
import { Table } from 'antd';

// const data = [
//   {
//     date: '2023-08-03',
//     email: 'C001',
//     customerName: 'John Doe',
//     orderType: 'buy',
//     orderCurrency: 'USD',
//     orderUnit: 150,
//     localAmount: 150,
//   },
//   // Add more data rows as needed
// ];

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

const TransactionTable = ({transactions}:{transactions:{}[]}) => {
  // console.log('Transactions ',transactions)
  return (
    <>
      <Table dataSource={transactions} columns={columns} />
    </>
  );
};

export default TransactionTable;

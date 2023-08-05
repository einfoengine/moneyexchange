'use client'

import { List, Avatar } from 'antd';

const data = [
  {
    id: 1,
    senderName: 'John Doe',
    message: 'Hello! How are you?',
    timestamp: '2023-08-03 12:00',
  },
  {
    id: 2,
    senderName: 'Jane Smith',
    message: 'Hi there! Just wanted to say hello.',
    timestamp: '2023-08-03 12:30',
  },
  // Add more message data as needed
];

const InboxPage = () => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar>{item.senderName[0]}</Avatar>}
            title={item.senderName}
            description={item.message}
          />
        </List.Item>
      )}
    />
  );
};

export default InboxPage;
'use client'

import { Layout } from 'antd';
import InboxPage from '@/components/Messages';

const { Content } = Layout;

const Inbox = () => {
  return (
    <Layout>
      <Content style={{ padding: '50px', background: '#fff' }}>
        <h1>Inbox</h1>
        <InboxPage />
      </Content>
    </Layout>
  );
};

export default Inbox;
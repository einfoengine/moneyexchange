import { useRouter } from 'next/router';
import { Layout } from 'antd';

const { Content } = Layout;

const UserDetailsPage = () => {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <Layout>
      <Content style={{ padding: '50px', background: '#fff' }}>
        <h1>User Details Page</h1>
        <p>User ID: {userId}</p>
        {/* Add more details based on the user ID */}
      </Content>
    </Layout>
  );
};

export default UserDetailsPage;
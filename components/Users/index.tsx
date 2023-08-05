import { Table, Avatar } from 'antd';
import Link from 'next/link';

interface UserData {
  userId: number;
  userName: string;
  email: string;
  phone: string;
  address: string;
}

const data: UserData[] = [
  {
    userId: 1,
    userName: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    address: '123 Main St, City, Country',
  },
  // Add more user data as needed
];

const columns = [
  {
    title: 'User ID',
    dataIndex: 'userId',
  },
  {
    title: 'User Name',
    dataIndex: 'userName',
    render: (text: string, record: UserData) => (
      <Link href={`/users/${record.userId}`}>
        {/* <a> */}
          <Avatar size={32} style={{ marginRight: 8 }}>
            {text.charAt(0).toUpperCase()}
          </Avatar>
          {text}
        {/* </a> */}
      </Link>
    ),
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const UserListTable: React.FC = () => {
  return <Table dataSource={data} columns={columns} />;
};

export default UserListTable;

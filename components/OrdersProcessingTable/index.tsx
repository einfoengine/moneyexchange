import { Table, Switch } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';


const handleChangeOrderStatus = async (record: OrderData, checked: boolean) => {
  const newStatus = checked ? 'Approved' : 'Cancel';
  console.log(`Order ${record.orderId} status changed to ${newStatus}`);
  const update = await axios.put("/api/orders/update", {
    orderId: record.orderId,
    status: newStatus
  })
  console.log("Update ", update);
};



const OrdersProcessingTable: React.FC = () => {
  const [data, setData] = useState<OrderData[]>([]); // Initialize with an empty array of OrderData

  useEffect(() => {
    axios.get(`/api/orders?user=${JSON.parse(localStorage.getItem("user"))._id}`)
      .then((response) => {
        if (response) {
          console.log(response.data);
          const modifiedData = response.data.map((order) => ({
            orderId: order._id,
            customerName: order.user.username,
            currency: order.currency.flag + ' ' + order.currency.code,
            orderType: order.type,
            orderAmount: order.amount,
            orderRate: order.rate,
            orderPrice: order.total.toFixed(3),
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
      title: 'Status',
      dataIndex: 'orderStatus',
    },
    {
      title: 'Total Amount',
      dataIndex: 'orderPrice',
    },
    {
      title: 'Order Status',
      dataIndex: 'orderStatus',
      render: (text: string, record: OrderData) => (
        console.log(record),
        <Switch
          checkedChildren="Approve"
          unCheckedChildren="Cancel"
          defaultChecked={text === "Approved"}
          onChange={(checked) => handleChangeOrderStatus(record, checked)}
        />
      ),
    },
  ];

  return <Table dataSource={data} columns={columns} />;
};

export default OrdersProcessingTable;

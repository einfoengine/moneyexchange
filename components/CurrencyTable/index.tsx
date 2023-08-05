'use client'

import { useState } from "react";
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from "antd";
// import "antd/dist/antd.css";

interface DataItem {
  key: string;
  country: string;
  unit: string;
  code: string;
  currency: string;
  weBuy: number;
  weSell: number;
  lastUpdate: string;
}

const EditableCell: React.FC<{
  editing: boolean;
  dataIndex: string;
  title: string;
  inputType: "text" | "number";
  record: DataItem;
  index: number;
}> = ({ editing, dataIndex, title, inputType, record, index, children }) => {
  const inputNode =
    inputType === "number" ? <InputNumber /> : <Input />;

  return (
    <td>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable: React.FC<{ data: DataItem[] }> = ({ data }) => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record: DataItem) => record.key === editingKey;

  const edit = (record: DataItem) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key: React.Key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
      } else {
        newData.push(row as DataItem);
      }
      setEditingKey("");
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
    },
    {
      title: "We Buy",
      dataIndex: "weBuy",
      key: "weBuy",
      editable: true,
    },
    {
      title: "We Sell",
      dataIndex: "weSell",
      key: "weSell",
      editable: true,
    },
    {
      title: "Last Update",
      dataIndex: "lastUpdate",
      key: "lastUpdate",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_: unknown, record: DataItem) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a href="javascript:void(0);" onClick={() => save(record.key)}>
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record: DataItem) => ({
        record,
        inputType: col.dataIndex === "weBuy" || col.dataIndex === "weSell" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={false}
      />
    </Form>
  );
};

export default function CurrencyTable() {
  const data: DataItem[] = [
    {
      key: "1",
      country: "Country 1",
      unit: "Unit 1",
      code: "BDT",
      currency: "Currency 1",
      weBuy: 100,
      weSell: 110,
      lastUpdate: "Update 1",
    },
    {
      key: "2",
      country: "Country 2",
      unit: "Unit 2",
      code: "USD",
      currency: "Currency 2",
      weBuy: 25,
      weSell: 30,
      lastUpdate: "Update 2",
    },
    // Add more data as needed
  ];

  return (
    <div style={{ margin: "20px" }}>
      <EditableTable data={data} />
    </div>
  );
}

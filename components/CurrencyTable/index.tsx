'use client'

import { useState } from "react";
import { Table, Input, Form } from "antd";
import axios from "axios";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <Input type="number" /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item name={dataIndex} style={{ margin: 0 }}>
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = ({ data }:{data: {}[]}) => {
  const [form] = Form.useForm();
  const [priceList, setData] = useState(data);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      we_sell: "",
      we_buy: "",
      unit: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();

      const response = await axios.put('/api/currencies/update', {
        _id: key,
        we_buy: parseFloat(row.we_buy),
        we_sell: parseFloat(row.we_sell),
        unit: parseFloat(row.unit),
      });
      

      const newData = [...priceList];
      const index = newData.findIndex((item) => key === item.key);
      console.log("Hello new data ");
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        console.log("priceList ", priceList);
        setEditingKey('');
      } else {
        console.log("priceList ** ", priceList);
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }

      console.log(response);
      setEditingKey("");
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
      setEditingKey("");
    }
  };

  const columns = [
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
    },
    {
      title: "Flag",
      dataIndex: "flag",
      key: "flag",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
      editable: true,
    },
    {
      title: "We Sell",
      dataIndex: "we_sell",
      key: "we_sell",
      editable: true,
    },
    {
      title: "We Buy",
      dataIndex: "we_buy",
      key: "we_buy",
      editable: true,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:void(0);"
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </a>
            <a href="javascript:void(0);" onClick={cancel}>
              Cancel
            </a>
          </span>
        ) : (
          <a
            href="javascript:void(0);"
            onClick={() => edit(record)}
            disabled={editingKey !== ""}
          >
            Edit
          </a>
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
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "we_sell" || col.dataIndex === "we_buy" || col.dataIndex==="unit" ? "number" : "text" ,
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
        bordered
        dataSource={data.map((item, index) => ({ ...item, key: item._id.toString() }))}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={false}
      />
    </Form>
  );
};

export default EditableTable;
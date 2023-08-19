'use client'

import React, { useState } from "react";
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
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      weSell: "",
      weBuy: "",
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
      const updateObject = {
        ...row,
        _id: key,
        weBuy: parseFloat(row.weBuy),
        weSell: parseFloat(row.weSell)
      }
      console.log("Update object: ",updateObject);
      const response = await axios.put('/api/currencies/update', {
        weBuy: parseFloat(row.weBuy),
        weSell: parseFloat(row.weSell),
        _id: key
        // updateObject
      });
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
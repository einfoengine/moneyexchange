'use client'

import React, { useState } from "react";
import { Table, Input, Form } from "antd";

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

const EditableTable = ({ data }) => {
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
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        console.log("Edited data:", newData[index]);
        setEditingKey("");
      } else {
        newData.push(row);
        console.log("Added data:", row);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Country",
      dataIndex: "Country",
      key: "Country",
    },
    {
      title: "Currency",
      dataIndex: "Currency",
      key: "Currency",
    },
    {
      title: "Flag",
      dataIndex: "Flag",
      key: "Flag",
    },
    {
      title: "Code",
      dataIndex: "Code",
      key: "Code",
    },
    {
      title: "weSell",
      dataIndex: "weSell",
      key: "weSell",
      editable: true,
    },
    {
      title: "weBuy",
      dataIndex: "weBuy",
      key: "weBuy",
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
        inputType: col.dataIndex === "weSell" || col.dataIndex === "weBuy" ? "number" : "text",
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
        dataSource={data.map((item, index) => ({ ...item, key: index.toString() }))}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={false}
      />
    </Form>
  );
};

export default EditableTable;

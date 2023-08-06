'use client'

import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';

const RegistrationForm = () => {
  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <div className='nt-component'>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email address' },
            { type: 'email', message: 'Invalid email address' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            { required: true, message: 'Please enter your phone number' },
            { pattern: /^[\d()+\-.\s]+$/, message: 'Invalid phone number' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="House Address"
          name="address"
          rules={[{ required: true, message: 'Please enter your house address' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="NID/Passport Number"
          name="nid_passport"
          rules={[{ required: true, message: 'Please enter your NID/Passport number' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form> 
    </div>
  );
};

export default RegistrationForm;

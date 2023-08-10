'use client'

import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import axios from 'axios';

const RegistrationForm = () => {
  const onFinish = async (values: any) => {
    const response = await axios.post('/api/user/register', values);
    console.log('Form values:', response);
  };

  return (
    <div className='nt-component rounded border p-20'>
      <h3 className='mb-10'>Register your account</h3>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
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
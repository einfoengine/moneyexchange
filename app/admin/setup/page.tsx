'use client'

import axios from "axios";

import { Button, Form, Input } from "antd";



type FieldType = {
    username: string;
    password?: string;
    name: string;
    phone: string
    
};

const AdminRegistration = () => {
    const onFinish = async (values: any) => {
        try {
            const response = await axios.post('http://localhost:3000/api/user/admin/registration', values);
            console.log("Request successful: ", response);
        } catch (error) {
            console.log("Request failed", error);
        }
        console.log("Admin registration! ", values);
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return(
        <>
            <div className="nt-admin-registration nt-component">
                <div className="border w-2/5 mx-auto mt-5 rounded p-5">
                    <h3 className="text-lg">Admin registration</h3>
                    <Form
                        name="nt-admin-registration-form"
                        autoComplete="off"
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                    >
                        <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                        <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                        <Input.Password />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                            >
                            <Input />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="Phone number"
                            name="phone"
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                            >
                            <Input />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit" className="nt-btn-primary">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default AdminRegistration;
'use client'

import axios from "axios";
import { Button, Checkbox, Form, Input } from "antd";
import { LoginContext } from '@/Context';
import { useContext } from "react";
import { useRouter } from "next/navigation";


type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const Login = () => {
    const router = useRouter();
    const {state, dispatch} = useContext(LoginContext);
    
    const onFinish = async (values: any) => {
        const {data} = await axios.post('http://localhost:3000/api/auth/admin', values);
        dispatch({
            type: 'login',
            payload: data
        });
        localStorage.setItem('user', JSON.stringify(data));
        if(data.authenticated===true){
            router.push('/admin');
        }
        console.log("Login data ", data);
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    console.log("User context ", state);
    return(
        <div className="nt-dashboard">
            <div className="nt-login border w-2/5 mx-auto mt-5 rounded p-5">
                <Form
                    name="nt-login-form"
                    autoComplete="off"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
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
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                    >
                    <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" className="nt-btn-primary">
                        Submit
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
export default Login
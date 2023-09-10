'use client'

import axios from "axios";
import { Button, Checkbox, Form, Input } from "antd";
import { useRouter } from "next/navigation";

import { AdminContext } from "@/Context";
import { useContext, useEffect } from "react";


type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const Login = () => {
    const router = useRouter();
    const {state, dispatch} = useContext(AdminContext);
    
    useEffect(()=>{
        console.log("Admin state ", state);
        if(state.role==="admin"){
            router.push("/admin/dashboard")
        }
    },[state])

    const onFinish = async (values: any) => {
        const {data} = await axios.post('http://localhost:3000/api/admin/login', values);
        localStorage.setItem('admin', JSON.stringify(data));
        if(data.authenticated===true && data.role==='admin'){
            dispatch({type:"login", payload: data})
        }
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return(
        <div className="nt-dashboard">
            <div className="nt-login border w-2/5 mx-auto mt-5 rounded-lg p-5">
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
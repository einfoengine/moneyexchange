'use client'
import axios from "axios";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserContext } from "@/Context";
import { useContext, useEffect } from "react";


type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const Login = ({path}:{path: string} ) => {
    const router = useRouter();
    const {state, dispatch} = useContext(UserContext);
    useEffect(()=>{
        if(state?.role==="user"){
            router.push("/")
        }
    },[state]);
    
    const onFinish = async (values: any) => {
        try {
            const {data} = await axios.post(path, values);
            if(data.authenticated===true && data.role==='user'){
                dispatch({type: 'login', payload: data})
                localStorage.setItem(
                    'user',
                    JSON.stringify(data)
                );
            }
            console.log("User ", data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return(
        <>
            <div className="nt-login nt-component">
                    
                    <div className="nt-login border w-2/5 mx-auto mt-5 rounded-lg p-5">
                        <h3 className="text-lg">Login</h3>
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

                            {/* <Form.Item<FieldType>
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{ offset: 8, span: 16 }}
                            >
                            <Checkbox>Remember me</Checkbox>
                            </Form.Item> */}

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit" className="nt-btn-primary">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <span className="w-2/5 mx-auto block rounded-lg p-2 mt-5">You need to login to use any of the functional features</span>
                    <span className="w-2/5 mx-auto block rounded-lg p-2">If you are not yet registered, please <Link href={"/register"}><span className=" text-red-600">REGISTER</span></Link></span>
                </div>
        </>
    )
}
export default Login;
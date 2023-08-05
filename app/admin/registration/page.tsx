'use client'

import RegistrationForm from "@/components/RegistrationForm";
import { Form, Input, Checkbox, Dropdown } from "antd"

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    name?: string;
    phone?: string;
    email?: string;
    address?: string;
    username?: string;
    password?: string;
    remember?: string;
};

const Registration: React.FC = () => {
    return(
        <div className="container mx-auto">
            <h3>Sign up</h3>
            <div className="border rounded p-6">

                <RegistrationForm/>
            </div>
        </div>
    )
}

export default Registration
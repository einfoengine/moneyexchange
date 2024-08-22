'use client'
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserContext } from "@/Context";
import { useContext, useEffect } from "react";

const Login = ({path}:{path: string}) => {
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
                        <h3 className="mb-3">Login</h3>
                        <form>
                            <div className="border border-gray-200 rounded-md p-3 mb-2 flex">
                                <label htmlFor="nt-admin-user">Username: </label>
                                <input type="text" name="nt-admin-user" id="nt-admin-user" className="w-full outline-none" required/>
                            </div>
                            <div className="border border-gray-200 rounded-md p-3 mb-2 flex">
                                <label htmlFor="nt-admin-user">Password: </label>
                                <input type="password" name="nt-admin-user" id="nt-admin-user" className="w-full outline-none" required/>
                            </div>
                            <button className="bg-green-600 hover:bg-green-700 transition-all text-white rounded-lg px-4 py-2" type="submit">Login</button>
                        </form>
                    </div>
                    <span className="w-2/5 mx-auto block rounded-lg p-2 mt-5">You need to login to use any of the functional features</span>
                    <span className="w-2/5 mx-auto block rounded-lg p-2">If you are not yet registered, please <Link href={"/register"}><span className=" text-red-600">REGISTER</span></Link></span>
                </div>
        </>
    )
}
export default Login;
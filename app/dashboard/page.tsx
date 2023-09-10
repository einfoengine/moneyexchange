'use client'
import { Calendar } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [orders, setOrders] = useState();
    useEffect(()=>{
        axios.get(`/api/orders?user=${JSON.parse(localStorage.getItem("user"))._id}`).then((response)=>{
            if(response){
                setOrders(response);
            }
        }).catch((err)=>{
            console.log("Ordata parse error: ", err);
        });
    },[])
    console.log("Orders: ", orders);
    return(
        <div className="nt-dashboard-content grid grid-cols-12">
            <div className="col-span-6">
                You have {orders?.data?.length} orders.
            </div>
            <div className="col-span-6">
                <Calendar/>
            </div>
        </div>
    )
}

export default Dashboard;
'use client'
import TransactionTable from "@/components/TransactionTable"
import axios from "axios"
import { useEffect, useState } from "react"

const Transaction = () => { 
    const [data, setData] = useState([{}]);
    useEffect(() => {
        try {
            axios.get('/api/orders/complete').then((orders) => {
                const modifiedData = orders.data.map((order:any) => ({
                    date: order.updatedAt,
                    customerId: order.user._id,
                    customerName: order.user.profile.name,
                    phoneNumber: order.user.profile.phoneNumber,
                    orderType: order.type,
                    orderAmount: order.total,
                    orderCurrency: order.currency.code + ' ' + order.currency.flag,
                }));
                setData(modifiedData);
            });
        } catch (error) {
            console.log(error);
        }
    }, []);
    
    return(
        <>
            <TransactionTable transactions={data}/>
        </>
    )
}
export default Transaction;
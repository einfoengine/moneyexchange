'use client'
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const NtBarChart = ({data}:{data: {}[]}) => {
    return (
        <div className='nt-component nt-chart'>
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sell" fill="#2B7FFF" />
            <Bar dataKey="buy" fill="#FEBC16" />    
            </BarChart>
        </div>
    );
  
}

export default NtBarChart
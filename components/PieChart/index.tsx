'use client'
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
];
const COLORS = ['#0088FE', '#00C49F',];

const NtPieChart = () => {
  return (
    <div className="nt-component mt-3">
      <h3 className="nt-mod-title">
        Order/Sales
      </h3>
      <PieChart width={250} height={180}>
        <Pie
          data={data}
          cx={120}
          cy={80}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default NtPieChart;

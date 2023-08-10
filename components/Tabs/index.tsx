'use client'

import { Tabs } from "antd";
import type { TabsProps } from 'antd';

import MoneyConverter from "../MoneyConverter";

const onChange = (key: string) => {
    console.log(key);
}

const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Buy`,
      children: <MoneyConverter functionType="buy"/>,
    },
    {
      key: '2',
      label: `Sell`,
      children: <MoneyConverter functionType="sell"/>,
    },
];
  

const App: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default App;
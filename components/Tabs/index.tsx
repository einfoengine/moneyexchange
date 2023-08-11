'use client'

import { Tabs } from "antd";
import type { TabsProps } from 'antd';

import MoneyConverter from "../MoneyConverter";

const onChange = (key: string) => {
    console.log(key);
}



const TabCom: React.FC = ({data}:{data: any}) => {
  const items: TabsProps['items'] = [
      {
        key: '1',
        label: `Buy`,
        children: <MoneyConverter data={data} functionType="buy"/>,
      },
      {
        key: '2',
        label: `Sell`,
        children: <MoneyConverter data={data} functionType="sell"/>,
      },
  ];
  return(
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  )
};

export default TabCom;
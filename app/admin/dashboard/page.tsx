import { Calendar } from "antd";
import NtBarChart from "@/components/BarChart";
import NtPieChart from "@/components/PieChart";
const BarChartData = [
    {
      name: 'Page A',
      sell: 40,
      buy: 20,
    },
    {
      name: 'Page B',
      sell: 30,
      buy: 18,
    },
    {
      name: 'Page C',
      sell: 20,
      buy: 98,
    },
    {
      name: 'Page D',
      sell: 27,
      buy: 39,
    },
    {
      name: 'Page E',
      sell: 200,
      buy: 48,
    },
    {
      name: 'Page F',
      sell: 23,
      buy: 38,
    },
    {
      name: 'Page G',
      sell: 34,
      buy: 3,
    },
  ];

const Dashboard = () => {
    return(
        <div className="nt-dashboard-content grid grid-cols-12 gap-3">
            <div className="col-span-6">
                <NtBarChart data={BarChartData}/>
                <NtPieChart/>
            </div>
            <div className="col-span-6">
                <Calendar/>
            </div>
        </div>
    )
}

export default Dashboard;
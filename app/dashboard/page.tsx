import { Calendar } from "antd";

const Dashboard = () => {
    return(
        <div className="nt-dashboard-content grid grid-cols-12">
            <div className="col-span-6">
                <Calendar/>
            </div>
        </div>
    )
}

export default Dashboard;
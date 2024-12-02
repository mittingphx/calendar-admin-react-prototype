import Chart from '../components/Chart';
import FeaturedInfo from '../components/FeaturedInfo'
import '../css/page/dashboard.css'
import { userData } from "../dummyData";
import WidgetSm from '../components/WidgetSm';
import WidgetLg from '../components/WidgetLg';
function Dashboard() {
    return (
        <div className="dashboard">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="dashboardWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    );
}
export default Dashboard;

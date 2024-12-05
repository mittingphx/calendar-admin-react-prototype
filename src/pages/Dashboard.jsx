/**
 * File:    Dashboard.jsx
 * Author:  Scott Mitting
 * Date:    12/3/2024
 * Abstract:
 *  Example dashboard page for the React app prototype admin website.
 */

import Chart from '../components/Chart';
import FeaturedInfo from '../components/FeaturedInfo'
import WidgetSm from '../components/WidgetSm';
import WidgetLg from '../components/WidgetLg';
import { userData } from "../dummyData";
import '../css/page/dashboard.css'

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

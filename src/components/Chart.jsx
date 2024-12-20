/**
 * File:    Chart.jsx
 * Author:  React Examples Team
 * Project: React Examples
 * Abstract:
 *  Example data component for the React app prototype admin website.
 */

import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import '../css/component/chart.css'

function Chart({ title, data, dataKey, grid }) {
    // noinspection PointlessArithmeticExpressionJS
    return (
        <div className="chart">
            <h3 className="chartTitle"> {title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
export default Chart;

import React from 'react';
import SplineChart from './SplineChart';
import {Select} from 'antd';
import 'antd/dist/antd.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            splineChart: ''
        }
        this.setSplineChart = this.setSplineChart.bind(this);
    }
    setSplineChart(chart) {
        this.setState({
            splineChart: chart
        });
    }
    render() {
        let chart;
        if(this.state.splineChart.length > 0) {
            chart = <SplineChart chart={this.state.splineChart} />;
        }
        return (
            <div>
                <Select defaultValue="Choose.." style={{ width: 120 }} onChange={this.setSplineChart}>
                    <Select.Option value="chart1">Chart 1</Select.Option>
                    <Select.Option value="chart2">Chart 2</Select.Option>
                </Select>
                {chart}
            </div>
        )
    }
}

export default Dashboard;
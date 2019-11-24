import React from 'react';
import SplineChart from './SplineChart';
import {Select} from 'antd';
import {buildUrl} from '../utils/url'
import 'antd/dist/antd.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            splineChart: '',
            availableCharts: [],
        }
        this.setSplineChart = this.setSplineChart.bind(this);
        this.loadOptions = this.loadOptions.bind(this);
    }
    setSplineChart(chart) {
        this.setState({
            splineChart: chart,
            availableCharts: this.state.availableCharts
        });
    }
    loadOptions() {
        fetch(buildUrl('https://5d9b9f3e686ed000144d2355.mockapi.io/charts', []))
            .then(response => response.json())
            .then(data => data.map(entry => ({
                    text: entry.text,
                    value: entry.value,
                })))
            .then(entries => {
                this.setState({
                    splineChart: this.state.splineChart,
                    availableCharts: entries,
                });
            });
    }
    componentDidMount() {
        this.loadOptions();
    }
    render() {
        let chart;
        if(this.state.splineChart.length > 0) {
            chart = <SplineChart chart={this.state.splineChart} />;
        }
        return (
            <div>
                <Select defaultValue="Choose.." style={{ width: 120 }} onChange={this.setSplineChart}>
                    {this.state.availableCharts.map(data => (
                        <Select.Option key={data.value}>{data.text}</Select.Option>
                    ))}
                </Select>
                {chart}
            </div>
        )
    }
}

export default Dashboard;
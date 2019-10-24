import React from 'react';
import SplineChart from './SplineChart';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            splineChart:'chart1'
        }
        this.setSplineChart = this.setSplineChart.bind(this);
    }
    setSplineChart(chart) {
        this.setState({
            splineChart: chart
        });
    }
    render() {
        return (
            <div>
                <SplineChart chart={this.state.splineChart} />
                <input
                    type="button"
                    value="Change the chart"
                    onClick={() => this.setSplineChart('chart2')}
                />
            </div>
        )
    }
}

export default Dashboard;
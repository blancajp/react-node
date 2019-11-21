import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// Load Highcharts modules
require('highcharts/modules/data')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);

class SplineChart extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.chart != this.props.chart;
    }
    render() {
        this.options = {
            chart: {
                type: 'spline'
            },
            title: {
                text: 'My chart'
            },
            data: {
                rowsURL: 'https://5d9b9f3e686ed000144d2355.mockapi.io/' + this.props.chart,
                firstRowAsNames: false,
                enablePolling: false
            }
        };
        return (
            <div>
                <HighchartsReact highcharts={Highcharts} options={this.options} updateArgs={true} />
            </div>
        )
    }
}

export default SplineChart;
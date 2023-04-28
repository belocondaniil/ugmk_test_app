import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import PropTypes from 'prop-types';
import { Pie } from "react-chartjs-2";
import './styles.css';

Chart.register(ArcElement, Tooltip, Legend);

function PieChart({ data }) {
  // const datasets = data.map((item, index) => {
  //   const color = index === 0 ? "#FE0000" : "#0000FE"
  //   return {
  //     data: item.data,
  //     label: item.label,
  //     fill: true,
  //     borderColor: color,
  //     backgroundColor: color,
  //   }
  // })

  const datasets = [{ data: [500, 300], backgroundColor: ['#008001', '#FEA500'] }]

  const PieChartData = {
    labels: ['Продукт 1', 'Продукт 2'],
    datasets,
  };

  return (
    <div className="pie-container">
      <Pie
      style={{
        display: 'inline',
      }}
      className='pie-chart'
      type='arc'
      options={{
        plugins: {
          title: {
            text: 'Статистика по продукции фабрики Б за сентябрь',
            display: true
          },
          legend: {
            display: true, //Is the legend shown?
            position: "bottom" //Position of the legend.
          }
        }
      }}
      data={PieChartData}
      />
    </div>
  )
}

PieChart.propTypes = {
  data: PropTypes.array,
}

export default PieChart;
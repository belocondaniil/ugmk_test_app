import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import PropTypes from 'prop-types';
import { Bar } from "react-chartjs-2";
import './styles.css';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function BarChart({ data }) {
  const datasets = data.map((item, index) => {
    const color = index === 0 ? "#FE0000" : "#0000FE"
    return {
      data: item.data,
      label: item.label,
      fill: true,
      borderColor: color,
      backgroundColor: color,
    }
  })

  const barChartData = {
    labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    datasets,
  };

  return (
    <div className='bar-container'>
      <Bar
      style={{
        display: 'inline',
      }}
      className='bar-chart'
      type='bar'
      options={{
        onClick: (event, elements) => console.log('%c%s', 'color:#DFA', '>>> val: ', event, elements),
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: true, //Is the legend shown?
            position: "bottom" //Position of the legend.
          }
        }
      }}
      data={barChartData}
      />
    </div>
  )
}

BarChart.propTypes = {
  data: PropTypes.array,
}

export default BarChart;

import PropTypes from 'prop-types';
import { Bar } from "react-chartjs-2";
import styles from './bar.module.css';
import { useNavigate } from 'react-router-dom';

function BarChart({ data }) {
  const navigate = useNavigate();
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

  const options = {
    onClick: ((event, elements) => {navigateToPieDiagram(elements)}),
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
      datalabels: {
        display: false,
      },
      legend: {
        display: true,
        position: "bottom"
      }
    }
  }

  const navigateToPieDiagram = (element) => {
    const { datasetIndex: fabricId, index: monthId } = element[0];
    navigate(`/${fabricId}/${monthId}`);
  }

  return (
    <div className={styles.barContainer}>
      <Bar
      style={{
        display: 'inline',
      }}
      className='bar-chart'
      type='bar'
      options={options}
      data={barChartData}
      />
    </div>
  )
}

BarChart.propTypes = {
  data: PropTypes.array,
}

export default BarChart;

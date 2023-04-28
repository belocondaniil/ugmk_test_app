import { Bar } from "react-chartjs-2";
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './bar.module.css';

const LABELS = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
const initialOptions = {
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
};

const COLUMN_COLORS = ['#FE0000', '#0000FE'];

function BarChart({ data }) {
  const navigate = useNavigate();
  const datasets = useMemo(
    () => data.map((item, index) => {
      return {
        data: item.data,
        label: item.label,
        fill: true,
        borderColor: COLUMN_COLORS[index],
        backgroundColor: COLUMN_COLORS[index],
      }
    }),
    [data],
  );

  const barChartData = useMemo(() => ({
    datasets,
    labels: LABELS,
  }), [datasets]);

  const options = useMemo(() => ({
    ...initialOptions,
    onClick(_, [element]) {
      const { datasetIndex: fabricId, index: monthId } = element;
      navigate(`/${fabricId}/${monthId}`);
    },
  }), [navigate])

  return (
    <div className={styles.barContainer}>
      <Bar
        className={styles.barChart}
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

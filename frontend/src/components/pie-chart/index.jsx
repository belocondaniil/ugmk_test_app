import { Pie } from "react-chartjs-2";
import { useParams } from 'react-router-dom';

import styles from './pie.module.css';
import { api } from '../../api';
import { useEffect, useState } from 'react';
import { fabricLabelsKeys } from '../../dictionaty/fabricLabelsKeys';
import { monthKeys } from '../../dictionaty/monthKeys';
import 'chart.js-plugin-labels-dv';


const getProductsByMonth = async (fabricId, monthId) => {
  try {
    const { data } = await api.get(`http://localhost:3001/api/${fabricId}/${monthId}`);
   return data.data;
  } catch (e){
    console.log(e)
  }
}

function PieChart() {
  const { fabricId, monthId } = useParams()
  const [dataByMonth, setDataByMonth] = useState({})

  useEffect(() => {
    getProductsByMonth(fabricId, monthId).then((res) => setDataByMonth(res))
  }, [fabricId, monthId])

  const datasets = [{ data: [dataByMonth?.data?.product1, dataByMonth?.data?.product2], backgroundColor: ['#008001', '#FEA500'] }]

  const PieChartData = {
    labels: ['Продукт 1', 'Продукт 2'],
    datasets,
  };

  const options = {
    plugins: {
      labels: {
        position: 'outside',
      },
      datalabels: {
        anchor: 'center',
        color: 'black',
      },
      title: {
        text: `Статистика по продукции ${fabricLabelsKeys[fabricId]} за ${monthKeys[monthId]}`,
        display: true,
        font: {
          size: 20
        }
      },
      legend: {
        display: true,
        position: "bottom"
      }
    }
  };

  return (
    <div className={styles.pieContainer}>
      <Pie
        className={styles.pieChart}
        type='arc'
        options={options}
        data= {PieChartData}
      />
    </div>
  )
}

export default PieChart;
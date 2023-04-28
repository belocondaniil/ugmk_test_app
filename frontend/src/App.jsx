import { useEffect, useState } from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import './App.css'
import { api } from './api';
import BarChart from './components/bar-chart';
import Filter from './components/filter';

const serverApi = async (filterValue) => {
  try {
    const { data } = await api.get(`http://localhost:3001/api/${filterValue}`);
   return data.data;
  } catch (e){
    console.log(e)
  }
}

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartDataLabels
)

function App() {
  const [data, setData] = useState([]);
  const [filterValue, setFilterValue] = useState('all')

  useEffect(() => {
    serverApi(filterValue).then((res) => setData(res));
  }, [filterValue])

  return (
    <>
      <div className='main-container'>
        <Filter filterValue={filterValue} changeFilterValue={setFilterValue}></Filter>
        <BarChart data={data}></BarChart>
      </div>
    </>
  )
}

export default App

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import store from './store';


function generateDatasetForGraph(records) {
  const map = {};

  const lastWeek = new Date(store.getState().dateRangeEnd)
  const firstWeek = new Date(store.getState().dateRangeStart)

  firstWeek.setUTCDate(firstWeek.getUTCDate() - firstWeek.getUTCDay());
  lastWeek.setUTCDate(lastWeek.getUTCDate() - lastWeek.getUTCDay());

  let i = new Date(firstWeek.getTime());
  while (new Date(i.toISOString().split("T")[0]) <= new Date(lastWeek.toISOString().split("T")[0])) {
      map[i.toISOString().split("T")[0]] = 0;
      i.setUTCDate(i.getUTCDate() + 7);
  }
  
  for (const record of records) {
      const date = new Date(record);
      const dayNumber = date.getUTCDay();
      date.setUTCDate(date.getUTCDate() - dayNumber);
      const dateString = date.toISOString().split("T")[0];
      if (map[dateString] === undefined){
        continue;
      }
      map[dateString]++;
  }

  const results = [];
  for (const key in map) {
      results.push({
          weekStart: key,
          count: map[key]
      });
  }
  results.sort((data1, data2) => new Date(data1.weekStart) - new Date(data2.weekStart))
  return results;
}

export default function DetailGraph(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weekly Watch Counts',
      },
    },
  };
  const dataset = generateDatasetForGraph(props);
  
  const data = {
    labels: dataset.map(data => data.weekStart),
    datasets: [
      {
        label: 'Watch Counts',
        data: dataset.map(data => data.count),
        backgroundColor: 'rgba(255, 0, 0, 0.8)',
      }
    ],
  };
  return <Bar options={options} data={data} />;
}
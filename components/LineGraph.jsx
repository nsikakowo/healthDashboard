import React from 'react';
import {
  Chart as ChartJS,
  Legend,
  Tooltip,
  Title,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  Legend,
  Tooltip,
  Title,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler
);

function LineGraph({ color }) {
  return (
    <div>
      <Line
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              beginAtZero: true,
            },
            y: {
              grid: {
                drawBorder: false,
              },
              ticks: {
                stepSize: 20000,
              },
              beginAtZero: true,
            },
          },
        }}
        data={{
          // x-axis label values
          labels: ['1 Jun', '8 Jul', '16 Aug', '24 Sep', '15 Oct'],
          datasets: [
            {
              label: 'Income in the month',
              // y-axis data plotting values
              data: [30000, 100000, 25000, 65000, 32000],
              fill: false,
              borderWidth: 3,
              backgroundColor: '#336CFB30',
              borderColor: color,
              responsive: true,
              lineTension: 0.5,
            },
          ],
        }}
      />
    </div>
  );
}

export default LineGraph;

import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

const labels = ['A', 'B', 'C', 'D', 'E', 'F']

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 5,
    },
  },
  responsive: true,
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      type: 'category', // Specify x-axis as category
      labels: labels,
    },
  },
  plugins: {
    legend: false,
    title: {
      display: true,
      text: 'Bar Chart',
    },
  },
}

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() =>
      faker.number.int()({ min: 10, max: 100, precision: 5 }),
      ),
      borderColor: 'rgb(0, 85, 255)',
      backgroundColor: 'rgb(0, 85, 255)',
    },
  ],
}

export default function BarChart() {
  return <Bar options={options} data={data} />
}

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
      type: 'category', // Specify x-axis as category
      labels: [
        'Category 1',
        'Category 2',
        'Category 3',
        'Category 4',
        'Category 5',
        'Category 6',
      ],
    },
    y: {
      beginAtZero: true,
      // Additional y-axis options go here
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

const labels = ['A', 'B', 'C', 'D', 'E', 'F']

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() =>
        faker.datatype.number({ min: 10, max: 100, precision: 10 }),
      ),
      borderColor: 'rgb(0, 85, 255)',
      backgroundColor: 'rgb(0, 85, 255)',
    },
  ],
}

export default function BarChart() {
  return <Bar options={options} data={data} />
}

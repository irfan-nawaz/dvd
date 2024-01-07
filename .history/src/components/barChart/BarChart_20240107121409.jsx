import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 5,
    },
  },
  responsive: true,
  plugins: {
    legend: false,
    title: {
      display: true,
      text: 'Bar Chart',
    },
  },
}

const labels = ['A', 'B', 'C', 'D', 'E', 'F']

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 1000, max: 10000 })),
      borderColor: 'rgb(0, 85, 255)',
      backgroundColor: 'rgb(0, 85, 255)',
    },
  ],
}

export default function BarChart() {
  return <Bar options={options} data={data} />
}

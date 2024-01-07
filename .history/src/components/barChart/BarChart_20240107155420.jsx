import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar, getDatasetAtEvent } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import { useRef } from 'react'
const labels = ['A', 'B', 'C', 'D', 'E', 'F']

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

const options = {
  indexAxis: 'y',
  elements: {},
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
        faker.number.int({ min: 10, max: 100, precision: 5 }),
      ),
      borderColor: 'rgb(0, 85, 255)',
      backgroundColor: 'rgb(0, 85, 255)',
    },
  ],
}

export default function BarChart() {
  const chartRef = useRef()
  const printDatasetAtEvent = (dataset) => {
    if (!dataset.length) return
    console.log(dataset)
  }
  const onClick = (event) => {
    const { current: chart } = chartRef
    if (!chart) {
      return
    }
    printDatasetAtEvent(getDatasetAtEvent(chart, event))
  }
  return <Bar options={options} data={data} />
}

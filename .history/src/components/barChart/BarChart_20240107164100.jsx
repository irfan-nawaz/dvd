import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar, getElementAtEvent } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import { useRef } from 'react'
const labels = ['A', 'B', 'C', 'D', 'E', 'F']

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

const options = {
  indexAxis: 'y',
  responsive: true,
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      type: 'category',
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
        faker.number.int({ min: 10, max: 80, precision: 5 }),
      ),
      borderColor: 'rgb(0, 85, 255)',
      backgroundColor: 'rgb(0, 85, 255)',
    },
  ],
}

export default function BarChart() {
  const chartRef = useRef()
  const printElementAtEvent = (element) => {
    if (!element.length) return

    const { datasetIndex, index } = element[0]

    console.log(data.labels[index], data.datasets[datasetIndex].data[index])
    console.log(element)
    alert(data.labels[index], data.datasets[datasetIndex].data[index])
  }
  const onClick = (event) => {
    const { current: chart } = chartRef

    if (!chart) {
      return
    }

    printElementAtEvent(getElementAtEvent(chart, event))
  }
  return <Bar options={options} data={data} ref={chartRef} onClick={onClick} />
}

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Line, getDatasetAtEvent } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import { useRef } from 'react'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
)

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 10, max: 80, precision: 5 })),
      borderColor: 'rgb(0, 85, 255)',
      backgroundColor: 'rgb(0, 85, 255)',
    },
  ],
}

export default function LineChart() {
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
  return <Line options={options} data={data} ref={chartRef} onClick={onClick} />
}

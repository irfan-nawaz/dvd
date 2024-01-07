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
import { dataArray, getValuesByKey } from '../../utils/utils'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
)

const valuesForKeyA = getValuesByKey(dataArray, 'A')
console.log(valuesForKeyA)

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
}

const labels = [
  '4/10/2022',
  '5/10/2022',
  '6/10/2022',
  '7/10/2022',
  '8/10/2022',
  '9/10/2022',
  '10/10/2022',
  '11/10/2022',
  '12/10/2022',
  '13/10/2022',
  '14/10/2022',
  '15/10/2022',
  '16/10/2022',
]

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() =>
        faker.number.int({ min: 0, max: 20, precision: 1 }),
      ),
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

import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar, getElementAtEvent } from 'react-chartjs-2'
import { useRef } from 'react'

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

const labels = ['A', 'B', 'C', 'D', 'E', 'F']

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

export default function BarChart({ dataArray }) {
  console.log(dataArray)
  const chartRef = useRef()

  const chartData = {
    labels: labels,
    datasets: dataArray.map((item) => ({
      label: `Dataset Time`,
      data: labels.map((label) => item[label]),
      borderColor: 'rgb(0, 85, 255)',
      backgroundColor: 'rgb(0, 85, 255)',
    })),
  }

  const printElementAtEvent = (element) => {
    if (!element.length) return

    const { datasetIndex, index } = element[0]

    console.log(
      chartData.labels[index],
      chartData.datasets[datasetIndex].data[index],
    )
    console.log(element)
    alert(chartData.labels[index], chartData.datasets[datasetIndex].data[index])
  }

  const onClick = (event) => {
    const { current: chart } = chartRef

    if (!chart) {
      return
    }

    printElementAtEvent(getElementAtEvent(chart, event))
  }

  return (
    <Bar options={options} data={chartData} ref={chartRef} onClick={onClick} />
  )
}

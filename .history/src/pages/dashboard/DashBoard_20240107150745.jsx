import { useState } from 'react'
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

const lineOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Line Chart',
    },
  },
}

const labels = ['A', 'B', 'C', 'D', 'E', 'F']

const initialLineData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 1000, max: 10000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
}

export default function DashBoard() {
  const [lineData, setLineData] = useState(initialLineData)

  const updateLineChart = (selectedCategory) => {
    // Implement logic to fetch and update line chart data based on the selected category
    // For demonstration purposes, updating with random data
    const newData = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: labels.map(() => faker.number.int({ min: 1000, max: 10000 })),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    }
    setLineData(newData)
  }

  const barOptions = {
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
    onClick: (_, elements) => {
      // Handle click on bar chart
      if (elements && elements.length > 0) {
        const selectedCategory = labels[elements[0].index]
        updateLineChart(selectedCategory)
      }
    },
  }

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <Bar options={barOptions} data={data} />
        </div>
        <div style={{ flex: 1 }}>
          <Line options={lineOptions} data={lineData} />
        </div>
      </div>
    </div>
  )
}

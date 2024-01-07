import { Bar } from 'react-chartjs-2'

export default function BarChart() {
  const handleClick = (elements) => {
    if (elements.length > 0) {
      const index = elements[0]._index
      onBarClick(index)
    }
  }

  return (
    <Bar
      data={data}
      options={{ onClick: (_, elements) => handleClick(elements) }}
    />
  )
}

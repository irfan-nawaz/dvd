import BarChart from '../../components/barChart/BarChart'
import LineChart from '../../components/lineChart/LineChart'

export default function DashBoard() {
  return (
    <div>
      <BarChart />
      <LineChart />
      <DatePicker />
    </div>
  )
}

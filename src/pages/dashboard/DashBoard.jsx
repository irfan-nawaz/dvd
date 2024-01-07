import BarChart from '../../components/barChart/BarChart'
import DatePicker from '../../components/datePicker/DatePicker'
import LineChart from '../../components/lineChart/LineChart'

export default function DashBoard() {
  return (
    <div className='flrx'>
      <BarChart />
      <LineChart />
      <DatePicker />
    </div>
  )
}

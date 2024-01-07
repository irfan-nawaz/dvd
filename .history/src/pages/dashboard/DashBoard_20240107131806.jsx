import BarChart from '../../components/barChart/BarChart'
import DateSelect from '../../components/datePicker/DatePicker'
import LineChart from '../../components/lineChart/LineChart'
DateSelect

export default function DashBoard() {
  return (
    <div>
      <BarChart />
      <LineChart />
      <DateSelect />
    </div>
  )
}

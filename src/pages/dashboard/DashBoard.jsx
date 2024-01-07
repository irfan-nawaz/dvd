import BarChart from '../../components/barChart/BarChart'
import DatePicker from '../../components/datePicker/DatePicker'
import LineChart from '../../components/lineChart/LineChart'
import { dataArray, arr, getUniqueSortedDates } from '../../utils/utils'

export default function DashBoard() {
  const uniqueSortedDates = getUniqueSortedDates(dataArray)

  console.log(uniqueSortedDates)
  return (
    <div className="flrx">
      <BarChart dataArray={arr} />
      <LineChart />
      <DatePicker />
    </div>
  )
}

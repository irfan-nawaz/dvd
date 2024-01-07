import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DateRangeSelector = ({ startDate, endDate, onDateChange }) => {
  return (
    <div>
      <label>Start Date:</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => onDateChange('startDate', date)}
      />
      <label>End Date:</label>
      <DatePicker
        selected={endDate}
        onChange={(date) => onDateChange('endDate', date)}
      />
    </div>
  )
}

export default DateRangeSelector

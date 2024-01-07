import { useState } from 'react'

export default function DatePicker() {
  const [startDate, setStartDate] = useState(new Date('2014/02/08'))
  const [endDate, setEndDate] = useState(startDate.getDate() + 1)
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
  )
}

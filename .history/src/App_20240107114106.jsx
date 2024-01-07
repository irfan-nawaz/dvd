import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import './App.css'
import DashBoard from './pages/dashboard/DashBoard'
import Login from './pages/login/Login'
import { useContext } from 'react'
import { AuthContext } from './main'
import { RequiresAuth } from './mods/RequiresAuth'

export default function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
    navigate(location?.state?.from?.pathname)
  }
  return (
    <>
      <button onClick={handleLogin}>{isLoggedIn ? 'logout' : 'login'} </button>
      <Routes>
        <Route
          path="/"
          element={
            <RequiresAuth>
              <DashBoard />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

// src/App.js
import React, { useState, useEffect } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import Filters from './components/Filters';
import DateRangeSelector from './components/DateRangeSelector';
import { parse } from 'date-fns';

const App = () => {
  const [data, setData] = useState([]); // Your data array
  const [ageFilter, setAgeFilter] = useState('15-25');
  const [genderFilter, setGenderFilter] = useState('Male');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [lineChartData, setLineChartData] = useState(null);

  // Initialize data and line chart on component mount
  useEffect(() => {
    initializeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update line chart data when bar is clicked
  const handleBarClick = (index) => {
    const selectedCategoryData = data[index];
    const labels = Object.keys(selectedCategoryData).filter((key) => key !== 'Day');
    const values = labels.map((label) => selectedCategoryData[label]);
    const lineChartDataset = {
      label: 'Time Trend',
      data: values,
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
      fill: false,
    };
    setLineChartData({ labels, datasets: [lineChartDataset] });
  };

  // Update data based on filters and date range
  const initializeData = () => {
    // Your data parsing logic here (convert strings to dates, filter based on age/gender, etc.)
    const filteredData = data.filter((item) => item.Age === ageFilter && item.Gender === genderFilter);

    // Set initial line chart data (you may want to adjust this based on your requirements)
    if (filteredData.length > 0) {
      const initialCategoryData = filteredData[0];
      const initialLabels = Object.keys(initialCategoryData).filter((key) => key !== 'Day');
      const initialValues = initialLabels.map((label) => initialCategoryData[label]);
      const initialLineChartDataset = {
        label: 'Time Trend',
        data: initialValues,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        fill: false,
      };
      setLineChartData({ labels: initialLabels, datasets: [initialLineChartDataset] });
    }

    // Set initial date range (you may want to adjust this based on your requirements)
    const firstDate = parse(data[0].Day, 'M/d/yyyy', new Date());
    const lastDate = parse(data[data.length - 1].Day, 'M/d/yyyy', new Date());
    setStartDate(firstDate);
    setEndDate(lastDate);

    setData(filteredData);
  };

  // Update data and line chart when filters or date range change
  useEffect(() => {
    initializeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ageFilter, genderFilter, startDate, endDate]);

  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <Filters onAgeChange={setAgeFilter} onGenderChange={setGenderFilter} />
      <DateRangeSelector startDate={startDate} endDate={endDate} onDateChange={(key, date) => key === 'startDate' ? setStartDate(date) : setEndDate(date)} />
      <BarChart data={barChartData} onBarClick={handleBarClick} />
      {lineChartData && <LineChart data={lineChartData} />}
    </div>
  );
};

export default App;

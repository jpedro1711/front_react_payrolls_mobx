import { Button, Typography } from '@mui/material'
import MonthPicker from '../../components/MonthPicker';
import YearPicker from '../../components/YearPicker';
import SearchIcon from '@mui/icons-material/Search';
import useStores from '../../stores/BaseStore';
import { useState } from 'react';
import { MONTHS } from '../../common/Months';

const CalculatePayrollPage = () => {
  const { payrollStore, modalStore, userStore } = useStores();
  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const [year, setYear] = useState(new Date().getFullYear())

  const handleMonthChange = (value: number) => {
    setMonth(value)
  }

  const handleYearChange = (value: number) => {
    setYear(value)
  }

  const calculatePayroll = async () => {
    const employeeName = userStore.user?.username;
    if (employeeName) {
      var result = await payrollStore.calculateEmployeeSalary(employeeName, month, year);
      modalStore.openModal(`Your salary for ${MONTHS.find((m) => m.value == month)?.label} - ${year}`, `$ ${parseFloat(result).toFixed(2)}`)
    }
  }

  return (
    <div>
      <Typography variant='h6'>Calculate salary</Typography>
        <div style={{display: 'flex', gap: '20px', width: '100%', alignItems: 'center', justifyContent: 'flex-start', marginTop: '20px'}}>
          <div>
            <MonthPicker onMonthChange={handleMonthChange}/>
          </div>
          <div>
            <YearPicker onYearChange={handleYearChange}/>
          </div>
          <div>
            <Button color="inherit" variant="contained" fullWidth type="submit" onClick={calculatePayroll}>
              <SearchIcon />
            </Button>
          </div>
        </div>
    </div>
  )
}

export default CalculatePayrollPage
import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { MONTHS } from '../common/Months';

interface MonthPickerProps {
  onMonthChange: (value: number) => void;
}

const MonthPicker: React.FC<MonthPickerProps> = (props) => {
  const [month, setMonth] = React.useState<number>(new Date().getMonth() + 1);

  const handleChange = (event: any) => {
    const selectedMonth = event.target.value as number;
    setMonth(selectedMonth);
    props.onMonthChange(selectedMonth);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Mês</InputLabel>
      <Select
        value={month}
        onChange={handleChange}
        label="Mês"
        defaultValue={new Date().getMonth() + 1}
      >
        {MONTHS.map((month) => (
          <MenuItem key={month.value} value={month.value}>
            {month.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MonthPicker;

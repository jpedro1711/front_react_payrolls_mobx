import { InputLabel, MenuItem, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import React from 'react'

interface YearPickerProps {
  onYearChange: (value: number) => void;
}

const YearPicker = (props: YearPickerProps) => {
  const years = Array.from({ length: 21 }, (_, index) => 2010 + index);
  const [year, setYear] = React.useState<number | undefined>(new Date().getFullYear());

  const handleChange = (event: any) => {
    setYear(event.target.value as number);
    props.onYearChange(event.target.value as number);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Ano</InputLabel>
      <Select
        value={year}
        onChange={handleChange}
        label="Ano"
      >
        {years.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default YearPicker
import { TableCell, TableHead, TableRow } from '@mui/material'

const PayrollListTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <strong>Employee</strong>
        </TableCell>
        <TableCell align="right">
          <strong>Check-In</strong>
        </TableCell>
        <TableCell align="right">
          <strong>Check-Out</strong>
        </TableCell>
        <TableCell align="right">
          <strong>Total Hours</strong>
        </TableCell>
        <TableCell align="right">
          <strong>Total Payment</strong>
        </TableCell>
      </TableRow>
    </TableHead>
  )
}

export default PayrollListTableHead
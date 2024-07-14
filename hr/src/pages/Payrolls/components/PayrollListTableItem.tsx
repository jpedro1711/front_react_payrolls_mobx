import { TableCell, TableRow } from '@mui/material'
import Payroll from '../../../stores/models/Payroll'
import { getDate, getTotalHours, getTotalWithDates } from '../../../utils/DateUtils'

interface IPayrollListTableItemProps {
  row: Payroll
}

const PayrollListTableItem = (props: IPayrollListTableItemProps) => {
  return (
    <TableRow
      key={props.row.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {props.row.employee.name}
      </TableCell>
      <TableCell align="right">{getDate(props.row.checkin)}</TableCell>
      <TableCell align="right">{getDate(props.row.checkout)}</TableCell>
      <TableCell align="right">
        {getTotalHours(props.row.checkin, props.row.checkout)}
      </TableCell>
      <TableCell align="right">
        {getTotalWithDates(
          props.row.employee.hourlyRate,
          props.row.checkin,
          props.row.checkout
        )}
      </TableCell>
    </TableRow>
  )
}

export default PayrollListTableItem
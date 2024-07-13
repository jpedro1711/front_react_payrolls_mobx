import React, { useEffect } from "react";
import useStores from "../../stores/BaseStore";
import moment from "moment";
import Payroll from "../../stores/models/Payroll";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { observer } from "mobx-react-lite";

const PayrollList = () => {
  const { payrollStore, userStore } = useStores();

  const [payrolls, setPayrolls] = React.useState<Array<Payroll> | null>(null);

  const fetch = async () => {
    var user = userStore.user?.username;
    if (user) {
      var payrolls = (await payrollStore.getPayrolls(user));
      setPayrolls(payrolls);
    }
  };

  React.useEffect(() => {
    setPayrolls(payrollStore.payrolls)
  }, [payrollStore.payrolls])

  useEffect(() => {
    fetch();
  }, [payrollStore]);

  const getDate = (date: string) => {
    if (date == null) {
      return "--";
    }
    return moment(date).format("DD/MM/YYYY - HH:mm");
  };

  const getTotalHours = (dateStart: string, dateEnd: string) => {
    if (dateStart == null || dateEnd == null) {
      return "--";
    }
    return moment(dateEnd).diff(moment(dateStart), "hours");
  };

  const getTotalValue = (
    hourlyRate: number,
    dateStart: string,
    dateEnd: string
  ) => {
    const hours = getTotalHours(dateStart, dateEnd);
    if (hours == "--") {
      return "--";
    }
    return "$" + (hours * hourlyRate).toFixed(2);
  };

  return (
    <Container>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
          <TableBody>
            {payrolls &&
              payrolls.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.employee.name}
                  </TableCell>
                  <TableCell align="right">{getDate(row.checkin)}</TableCell>
                  <TableCell align="right">{getDate(row.checkout)}</TableCell>
                  <TableCell align="right">
                    {getTotalHours(row.checkin, row.checkout)}
                  </TableCell>
                  <TableCell align="right">
                    {getTotalValue(
                      row.employee.hourlyRate,
                      row.checkin,
                      row.checkout
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default observer(PayrollList);

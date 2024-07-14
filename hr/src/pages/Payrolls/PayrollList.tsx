import React, { useEffect } from "react";
import useStores from "../../stores/BaseStore";
import Payroll from "../../stores/models/Payroll";
import {
  Container,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import PayrollListTableItem from "./components/PayrollListTableItem";
import PayrollListTableHead from "./components/PayrollListTableHead";

const PayrollList = () => {
  const { payrollStore, userStore } = useStores();

  const [payrolls, setPayrolls] = React.useState<Array<Payroll> | null>(null);
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = +event.target.value;
    setRowsPerPage(newSize);
    setPage(0);
    fetchPayrolls(0, newSize);
  }

  const fetchPayrolls = async (pageNumber: number, pageSize: number) => {
    var user = userStore.user?.username;
    if (user) {
      var payrolls = await payrollStore.getPayrolls(user, pageNumber + 1, pageSize);
      setPayrolls(payrolls.data);
    }
  };

  React.useEffect(() => {
    setPayrolls(payrollStore.payrolls)
  }, [payrollStore.payrolls])

  useEffect(() => {
    fetchPayrolls(page, rowsPerPage);
  }, [page, rowsPerPage]);

  return (
    <Container>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <PayrollListTableHead />
          <TableBody>
            {payrolls &&
              payrolls.map((row) => (
                <PayrollListTableItem row={row} key={row.id}/>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {payrollStore.paginationOptions && 
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={payrollStore.paginationOptions.totalItems}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      }
    </Container>
  );
};

export default observer(PayrollList);

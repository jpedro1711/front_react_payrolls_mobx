import { Box, Button, Container, TextField } from '@mui/material'
import { useFormik } from 'formik';
import useStores from '../../stores/BaseStore';

const CalculatePayrollPage = () => {

  const { userStore, payrollStore, modalStore } = useStores();

  const formik = useFormik({
    initialValues: {
      month: new Date().getMonth(),
    },
    onSubmit: async (values) => {
        const [year, month] = values.month.toString().split('-');
        const employeeName = userStore.user?.username;

        if (employeeName) {
          const result = await payrollStore.calculateEmployeeSalary(employeeName, parseInt(month), parseInt(year));
          modalStore.openModal('Your payroll', '$ ' + parseFloat(result).toFixed(2))
        }
    },
  });
  return (
    <div>
      <Container>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="month"
              sx={{ my: '10px' }}
              name="month"
              label="Select a date (month / year)"
              type="month"
              value={formik.values.month}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.month && Boolean(formik.errors.month)}
              helperText={formik.touched.month && formik.errors.month?.toString()}
              required
            />
            <Box>
              <Button color="inherit" variant="contained" fullWidth type="submit">
                Calculate
              </Button>
            </Box>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default CalculatePayrollPage
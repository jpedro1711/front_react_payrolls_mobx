import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button, TextField, Typography } from '@mui/material';
import IAuthRequest from '../../../services/requests/IAuthRequest';
import useStores from '../../../stores/BaseStore';

const validationSchema = yup.object({
  username: yup
    .string()
    .min(4, 'Enter a valid username')
    .required('Username is required'),
  password: yup
    .string()
    .min(3, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match')
    .required('Confirm password'),
});

const RegisterPage = () => {
  const { userStore } = useStores();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      passwordConfirm: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const reqData: IAuthRequest = {
          username: values.username,
          password: values.password,
      };
      userStore.register(reqData);
  },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="h5" gutterBottom>
            Enter your credentials to register
        </Typography>
        <TextField
          fullWidth
          sx={{ my: '10px' }}
          id="username"
          name="username"
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username?.toString()}
        />
        <TextField
          fullWidth
          id="password"
          sx={{ my: '10px' }}
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password?.toString()}
        />
        <TextField
          fullWidth
          id="passwordConfirm"
          sx={{ my: '10px' }}
          name="passwordConfirm"
          label="Password confirmation"
          type="password"
          value={formik.values.passwordConfirm}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)}
          helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm?.toString()}
        />
        <Button color="inherit" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;

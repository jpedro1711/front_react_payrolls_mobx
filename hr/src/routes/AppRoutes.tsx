import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/Authentication/Login/LoginPage'
import RegisterPage from '../pages/Authentication/Register/RegisterPage'
import ProtectedRoutes from './ProtectedRoutes'
import PayrollsPage from '../pages/Payrolls/PayrollsPage'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route element={<ProtectedRoutes />}>
                <Route path='/payrolls' element={<PayrollsPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
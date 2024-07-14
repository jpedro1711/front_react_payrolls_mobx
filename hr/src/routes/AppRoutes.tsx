import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/Authentication/Login/LoginPage'
import RegisterPage from '../pages/Authentication/Register/RegisterPage'
import ProtectedRoutes from './ProtectedRoutes'
import PayrollsPage from '../pages/Payrolls/PayrollsPage'
import NotFound from '../pages/NotFound/NotFound'
import CalculatePayrollPage from '../pages/CalculatePayroll/CalculatePayrollPage'
import MenuPage from '../pages/MenuPage/MenuPage'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/' element={<MenuPage />} />
            <Route element={<ProtectedRoutes />}>
                <Route path='/payrolls' element={<PayrollsPage />} />
                <Route path='/calculatePayroll' element={<CalculatePayrollPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/Authentication/Login/LoginPage'
import RegisterPage from '../pages/Authentication/Register/RegisterPage'
import PayrollList from '../pages/Home/PayrollList'
import ProtectedRoutes from './ProtectedRoutes'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route element={<ProtectedRoutes />}>
                <Route path='/payrolls' element={<PayrollList />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
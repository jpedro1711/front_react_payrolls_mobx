import { Container } from '@mui/material'
import Header from '../../components/Header'
import AppRoutes from '../../routes/AppRoutes'

const HomePage = () => {

  return (
    <div>
        <Header />
        <Container>
            <AppRoutes />
        </Container>
    </div>
  )
}

export default HomePage
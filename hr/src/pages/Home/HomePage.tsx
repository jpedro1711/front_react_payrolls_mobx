import { Container } from '@mui/material'
import Header from '../../components/Header'
import AppRoutes from '../../routes/AppRoutes'
import Sidebar from '../../components/Sidebar'

const HomePage = () => {
  
  return (
    <div>
        <Header />
        <Sidebar>
          <Container>
              <AppRoutes />
          </Container>
        </Sidebar>
    </div>
  )
}

export default HomePage
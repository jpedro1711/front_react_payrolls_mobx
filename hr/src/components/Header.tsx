import { AppBar, Box, Button, Toolbar, Typography  } from '@mui/material'
import useStores from '../stores/BaseStore';

const Header = () => {
  const { userStore } = useStores();

  const handleLogout = () => {
    console.log(userStore.isLogged)
    userStore.logout()
    window.location.href = '/login';
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar color='transparent' position="static" sx={{ marginBottom: 20, paddingY: '20px' }}>
            <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Typography variant="h6" color="inherit" component="div">
                        Payroll Manager
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="inherit" href='/login'>Login</Button>
                    <Button color="inherit" href='/register'>Register</Button>
                    <Button color="inherit" href='/payrolls'>Payrolls</Button>
                    <Button variant='outlined' color='error' onClick={handleLogout}>Logout</Button>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Header;

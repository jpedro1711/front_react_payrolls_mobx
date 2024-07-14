import { AppBar, Box, Button, Toolbar  } from '@mui/material'
import useStores from '../stores/BaseStore';
import { observer } from 'mobx-react-lite';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';

const Header = () => {
  const { userStore } = useStores();

  const handleLogout = () => {
    userStore.logout()
    window.location.href = '/login';
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar color='transparent' position="static" sx={{ marginBottom: 5, paddingY: '20px' }}>
            <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  <a href='/'>
                    <AppsSharpIcon />
                  </a>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {!userStore.isLogged && 
                      <>
                      <Button color="inherit" href='/login'>Login</Button>
                      <Button color="inherit" href='/register'>Register</Button>
                      </>
                  }
                  {userStore.isLogged && <Button variant='outlined' color='error' onClick={handleLogout}>Logout</Button> }
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default observer(Header);

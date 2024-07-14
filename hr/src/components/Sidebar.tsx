import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material';
import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useTheme } from '@mui/material/styles';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  const drawerWidth = 240;

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
  }>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }));

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 2, ...(open && { display: 'none' }) }}
      >
        <ChevronLeftIcon />
      </IconButton>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem disablePadding>
                <a style={{textDecoration: 'none', color: 'black'}} href={"calculatePayroll"}>
                    <ListItemButton>
                        <ListItemIcon>
                        <AttachMoneyIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Calculate payroll"} />
                    </ListItemButton>
                </a>
            </ListItem>
            <ListItem disablePadding>
                <a style={{textDecoration: 'none', color: 'black'}} href={"payrolls"}>
                    <ListItemButton>
                        <ListItemIcon>
                        <AccessTimeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"My registrations"} />
                    </ListItemButton>
                </a>
            </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}

export default Sidebar;

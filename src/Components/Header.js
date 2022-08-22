import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link  } from '@mui/material';
import Container from '@mui/material/Container';

const drawerWidth = 300;
const navItems = ['Home', 'About Us', 'key Ussue', 'Media Resources', 'Contact Us'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <h3><Link href="/" className='logoparty'> Professional Party</Link></h3>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} >
           
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText  >
              <Link href="/"> {item}</Link>
            </ListItemText>            
          </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button variant="outlined" className="button-50" href="/">
            <Link href="/"> Apply Ticket</Link>
          </Button>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
       
      <AppBar component="nav">
      <Container >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          <h3><Link href="/" className='logoparty'> Professional Party</Link></h3>

          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }} className="headlinks">
                 <Link href="/"> {item}</Link>
              </Button>
            ))}
            <Button variant="outlined" className="button-50" href="/">
            <Link href="/"> Apply Ticket</Link>
          </Button>
          </Box>
        </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
     
    </Box>
  );
}

DrawerAppBar.propTypes = {
  
  window: PropTypes.func,
};

export default DrawerAppBar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DraftsIcon from '@mui/icons-material/Drafts';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Stack from '@mui/material/Stack';

const Nav = _ => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor:'white',color :'black'}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <DraftsIcon sx={{color:'blue'}}/>
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{mr: 3, fontFamily:'cursive', display: { xs: 'none', sm: 'block' } ,color:'blue'}}
            >
              Estatery
            </Typography>
            <Typography
              component="div"
              sx={{color:'black',mr: 3,padding:'0.5rem',borderRadius:'10px', backgroundColor:'whitesmoke',display: { xs: 'none', sm: 'block' } }}
            >
              Rent
            </Typography>
            <Typography
              component="div"
              sx={{mr: 3, display: { xs: 'none', sm: 'block' } }}
            >
              Buy
            </Typography>
            <Typography
              component="div"
              sx={{ mr: 3, display: { xs: 'none', sm: 'block' } }}
            >
              Sell
            </Typography>

            <Button
              id="demo-customized-button"
              aria-haspopup="true"
              disableElevation
              sx={{color:'black',textTransform: 'capitalize'}}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Manage Property
            </Button>&emsp;
            <Button
              id="demo-customized-button"
              aria-haspopup="true"
              disableElevation
              sx={{color:'black',textTransform: 'capitalize'}}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Resources
            </Button>

            <Stack spacing={3} ml={56} direction="row">
              <Button variant="outlined" sx={{color: 'blue' }}>Login</Button>
              <Button variant="contained">Sign Up</Button>

            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Nav;
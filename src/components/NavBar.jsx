import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { CSVLink } from "react-csv";
import "./nav.css"
const NavBar = (props) => {
    const { generateNumbers, data } = props
    return (
      <div className='nav-bar'>
       <AppBar position="static">
          <Toolbar className="nav">
          <div className="left-menu">
          <IconButton className='' color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" color="inherit" className='nav-text'>
              This is Random!
            </Typography>
            <Typography variant="h6" color="inherit">
              A random phone number generating application
            </Typography>

          </div>
          <CSVLink data={data}>
            <Button variant="contained" color="secondary" className='btn-generate'>
              Download Numbers
            </Button>
          </CSVLink>
              <Button onClick={generateNumbers}variant="contained" color="secondary" className='btn-generate'>
                Generate Numbers
              </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }

export default NavBar;
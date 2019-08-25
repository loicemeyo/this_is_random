import React from 'react'
import './subnav.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const SubNav = (props) => {
  const { max, min, total } = props
    return (
      <div className='sub-nav'>
       <AppBar position="static" color='default'>
          <Toolbar className="nav">
          <div className="left-menu">
            <Typography variant="h6" color="inherit" className='sub-nav-text'>
              Maximum: { max }
            </Typography>
            < br/>
            <Typography variant="h6" color="inherit" className='sub-nav-text'>
              Minimum : { min }
            </Typography>
            <Typography variant="h6" color="inherit" className='sub-nav-text'>
              Total: { total }
            </Typography>

          </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }

export default SubNav;
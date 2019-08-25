import React from 'react'
import './subna.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const SubNav = (props) => {
  const { max, min } = props
    return (
      <div className='sub-nav'>
       <AppBar position="static" color='default'>
          <Toolbar className="nav">
          <div className="left-menu">
            <Typography variant="h6" color="inherit" className='sub-nav-text'>
              Maximum: { max }
            </Typography>
            <Typography variant="h6" color="inherit">
              Minimum : { min }
            </Typography>

          </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }

export default SubNav;
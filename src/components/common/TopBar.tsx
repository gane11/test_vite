import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const TopBar = () => {
  return (
    <AppBar color='transparent'>
      <Toolbar>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          HERE
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar

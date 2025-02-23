import { Outlet } from '@tanstack/react-router'
import TopBar from './TopBar'
import Box from '@mui/material/Box'

const Layout = () => {
  return (
    <>
      <TopBar />
      <Box padding={2}>
        <Outlet />
      </Box>
    </>
  )
}

export default Layout

import { Outlet } from '@tanstack/react-router'
import TopBar from './TopBar'
import Box from '@mui/material/Box'

const Layout = () => {
  return (
    <>
      <TopBar />
      <Box padding={2}>
        <Outlet /> {/* ✅ This will render the current page */}
      </Box>
    </>
  )
}

export default Layout
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import IconButton from '@mui/material/IconButton'
import Snackbar from '@mui/material/Snackbar'
import SnackbarContent from '@mui/material/SnackbarContent'
import { createContext, ReactNode, useCallback, useState } from 'react'

import theme from '@/styles/theme'

type TVariant = 'success' | 'error' | 'warning' | 'info' | 'default'

interface SnackbarContextType {
  showSnackbar: (args: { message: string; variant?: TVariant }) => void
}

export const SnackbarContext = createContext<SnackbarContextType>({
  showSnackbar: () => {
    console.warn('showSnackbar was called without a SnackbarProvider')
  },
})

const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarData, setSnackbarData] = useState<{
    message: string
    variant: TVariant
  }>({
    message: '',
    variant: 'default',
  })

  const showSnackbar = useCallback(
    ({
      message,
      variant = 'default',
    }: {
      message: string
      variant?: TVariant
    }) => {
      setSnackbarData({ message, variant })
      setSnackbarOpen(true)
    },
    [],
  )

  const handleClose = () => {
    setSnackbarOpen(false)
  }

  const getSnackbarBackground = (variant: TVariant) => {
    switch (variant) {
      case 'success':
        return theme.palette.success.main
      case 'error':
        return theme.palette.error.main
      case 'warning':
        return theme.palette.warning.main
      case 'info':
        return theme.palette.info.main
      default:
        return '#121212'
    }
  }

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <SnackbarContent
          sx={{
            backgroundColor: getSnackbarBackground(snackbarData.variant),
          }}
          message={snackbarData.message}
          action={
            <IconButton aria-label='delete' size='small' onClick={handleClose}>
              <ClearOutlinedIcon sx={{ color: 'white' }} />
            </IconButton>
          }
        />
      </Snackbar>
    </SnackbarContext.Provider>
  )
}

export default SnackbarProvider
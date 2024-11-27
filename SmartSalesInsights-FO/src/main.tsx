import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { CssBaseline, ThemeProvider } from "@mui/material"
import './index.css'
import App from './App.tsx'
import { store } from './store/store.ts'
import theme from './themes/theme.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>  
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <App />
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)

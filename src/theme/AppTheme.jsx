import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { purpleTheme } from "./purpleTheme"
import PropTypes from 'prop-types';


const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={purpleTheme}>
        <CssBaseline />
        {children}
      
    </ThemeProvider>
  )
}

AppTheme.propTypes = {
    children: PropTypes.node.isRequired, 
  };

export default AppTheme

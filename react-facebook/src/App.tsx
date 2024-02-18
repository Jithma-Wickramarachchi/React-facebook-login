import { Box, Grid } from '@mui/material'
import './App.css'
import '@mui/material'
import Head from './Head.tsx'
import Form from './Form.tsx'
 
function App() {

  return (
    <div>
      <div>
      <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
       <Grid container spacing={4} >
        <Grid item xs={12} md={6}>
          <Head></Head>
        </Grid>
        <Grid item xs={12} md={6}>
          <Form/>
        </Grid>
      </Grid>
    </Box>
      </div>
    </div>
  )
}

export default App

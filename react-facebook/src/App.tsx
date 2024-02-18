import { Button, Grid } from '@mui/material'
import './App.css'
import '@mui/material'
import Head from './Head.tsx'
import Form from './Form.tsx'

function App() {

  return (
    <div>
      <div>
      <Grid container spacing={2}>
        <Grid item sx={{m: 3 }}>
          <Head></Head>
        </Grid>
        <Grid item xs={4}>
          <Form/>
        </Grid>
      </Grid>
      </div>
      
    </div>
  )
}

export default App

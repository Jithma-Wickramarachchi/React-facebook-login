import { Box, Grid } from "@mui/material"

function Head() {
    return (
        <div>
            <Grid container justifyContent={"center"} sx={{ mt:3}}>
                <img style={{ width: 368, height: 182 }} className="fb_logo _8ilh img" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook"></img>
            </Grid>
            <Grid container justifyContent={"center"}>
                <Box sx={{ fontSize: 24, width: 360, m: 2 }}>
                    Facebook helps you connect and share with the people in your life
                </Box>
            </Grid>


        </div>
    )
}
export default Head

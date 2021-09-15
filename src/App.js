import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import DoubleArrowOutlinedIcon from '@material-ui/icons/DoubleArrowOutlined';
import { Avatar } from '@mui/material';

const onDownload = () => {
  const link = document.createElement("a");
  link.download = `speedtest-0.0.1-66-develop.apk`;
  link.href = "./dl/apk/speedtest-0.0.1-66-develop.apk";
  link.click();
};

export default function App() {
  return (
    <Container maxWidth="md">
      <Toolbar>
        <Avatar variant="rounded" alt="5Gst" src="/static/images/logo.png" />
        <Typography variant="h5" fontWeight="fontWeightBold" style={{marginLeft: "10px"}}>
          5Gst
        </Typography>
      </Toolbar>
      <Box sx={{ my: 4 }}>
        <div align = "center" justify = "center" alignItems = "center">

          <Typography variant="h4" component="h1" gutterBottom>
            Opensource<br></br>
            iPerf-based<br></br>
            5G speedtest service
          </Typography>
          
          <div className="carousel">
          </div>

          <div className="download_button"style={{marginTop: "100px", marginBottom: "100px"}}>
            <Button variant="outlined" color="primary" size="large" onClick={onDownload}>
              Download Android App
            </Button>
            <Typography variant="caption" display="block" gutterBottom>
              0.0.1.66-develop
            </Typography>
          </div>

          <div classname="more_info">
            <Typography variant="h5" component="h1" gutterBottom>
              More info
            </Typography>
            <IconButton href="https://github.com/SkoltechSummerCamp" target="_blank" rel="noopener noreferrer">
              <GitHubIcon fontSize="large"/>
            </IconButton>
          </div>

        </div>
      </Box>
    </Container>
  );
}

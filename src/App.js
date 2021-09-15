import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
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
        <Typography variant="h5" fontWeight="fontWeightBold" style={{marginLeft: "10px", flexGrow: 1}}>
          5Gst
        </Typography>
        <IconButton href="https://github.com/SkoltechSummerCamp" target="_blank" rel="noopener noreferrer">
          <GitHubIcon fontSize="large"/>
        </IconButton>
      </Toolbar>
        <div align = "center" justify = "center" alignItems = "center">
          <Typography variant="h4" component="h1" gutterBottom>
            Opensource<br></br>
            iPerf-based<br></br>
            <b>5G speedtest service</b>
          </Typography>
          <Container maxWidth="xs">
            <img
              style={{ width: "100%"}}
              alt="Cool bike"
              src="/static/images/promo.png"
            />
          </Container>

          <div className="download_button" style={{marginTop: "10px", marginBottom: "20px"}}>
            <Button variant="contained" style={{background: 'linear-gradient(135deg, #47F865 40%, #94FFA5 70%)', color: 'black',  padding: '10px 50px'}} size="large" onClick={onDownload}>
              Download Android App
            </Button>
            <Typography variant="caption" display="block" gutterBottom style={{marginTop: "5px"}}>
              0.0.1.66-develop
            </Typography>
          </div>
        </div>
        <Box sx={{ my: 4 }}>
</Box> 
    </Container>
  );
}

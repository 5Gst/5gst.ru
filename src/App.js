import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import { Avatar } from '@mui/material';
import Divider from '@mui/material/Divider';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActions } from '@mui/material';


const onDownload = () => {
  window.gtag('event', 'click', 'onDownload');
  const link = document.createElement("a");
  link.download = `speedtest-0.0.1-72-develop-debug.apk`;
  link.href = "./dl/apk/speedtest-0.0.1-72-develop-debug.apk";
  link.click();
};

export default function App() {
  return (
    <Container maxWidth="md">
      <Toolbar>
        <IconButton href="https://5gst.ru">
          <Avatar variant="rounded" alt="5Gst" src="/static/images/logo.png"></Avatar>
        </IconButton>
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
              0.0.1-72-develop-debug
            </Typography>
          </div>
          
          <Card style={{margin: "20px"}}>
            <CardContent style={{textAlign: "left"}}>
              
              <Typography gutterBottom variant="h5" component="div" style={{textAlign: "left"}}>
                Local network usage (direct iPerf connection)
              </Typography>

              <Typography gutterBottom variant="h6" component="div">
                🖥️ Setup local server
              </Typography>
                  1. Check iPerf version: <code style={{background:'#EEEEEE', borderRadius:'5px', padding:'2px'}}>iperf -v</code>. 5Gst supports iPerf <strong>v2.1.x</strong> only. Download the latest iPerf source code <a href="https://sourceforge.net/p/iperf2/code/ci/2-1-4/tree/" target="_blank" rel="noopener noreferrer">here</a> or <a href="https://github.com/SkoltechSummerCamp/iPerf" target="_blank" rel="noopener noreferrer">from our fork</a>;<br></br>
                  2. Run iPerf with args: <code style={{background:'#EEEEEE', borderRadius:'5px', padding:'2px'}}>iperf -s -u -p XXXX</code> where `XXXX` is the iPerf port (5001 by default);<br></br>
                  <br></br>
              <Typography gutterBottom variant="h6" component="div">
                📱Setup mobile
              </Typography>
                  1. Download and install 5Gst app (see download button above);<br></br>
                  2. Run 5Gst app and setup for Direct iPerf Mode:
                  <ul>
                    <li>Click on <strong>Direct iPerf Mode</strong> radio button;</li>
                    <li>Write in the <strong>Main address</strong> textbox the iPerf server address and port (see step 2 in the previous instruction). For example: <code style={{background:'#EEEEEE', borderRadius:'5px', padding:'2px'}}>192.168.0.33:5001</code>;</li>
                  </ul>
                  3. Start speedtest and check the download speed;<br></br>
                  4. Share the results with everyone ;)<br></br>
                  <br></br>

                  Check other 5Gst usecases in the repository              
            </CardContent>
            <CardActions style={{justifyContent: "right"}}>
              <Button size="small" color="black" href="https://github.com/SkoltechSummerCamp" target="_blank" rel="noopener noreferrer">
                More on GitHub
              </Button>
            </CardActions>
          </Card>
          
        </div>
        <Box sx={{ my: 4 }}>
</Box> 
    </Container>
  );
}

// import "./styles/App.css";
import { useState, useEffect } from "react";
import {Typography,TextField, Button } from "@material-ui/core";
import { Card, CardContent, Grid } from "@mui/material";


function ContactUs() {
  const [showAd, setShowAd] = useState(false);

  const openAd = () => setShowAd(true);
  const closeAd = () => setShowAd(false);

  useEffect(() => {
    const interval = setTimeout(openAd, 3000);
    return () => {
      clearTimeout(interval);
    };
  }, []);

  /* NOTE 
  Kuki ye codesandbox me hai isliye image ko maine public folder me rakaha hai
   warna agar app apne desktop pe aisa create kr rhe hai to assets me rakhna hoga
  */

  return (
    <Grid sx={{backgroundColor:'#81C4FA', marginBottom:10}}>
        <Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto", backgroundColor:'#81C4FA' }}>
          <CardContent>
            <Typography gutterBottom sx={{fontWeight:600}} variant="h4">
              Contact Us
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
          </Typography> 
            <form>
              <Grid container spacing={1} sx={{marginBottom:10}}>
                <Grid xs={12}  item>
                  <TextField placeholder="Enter full name" label="Full Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" style={{backgroundColor:'#1976D2'}} fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
  );
}

export default ContactUs;

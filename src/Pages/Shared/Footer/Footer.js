import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Box px={{xs:3,sm:10}} py={{xs:5,sm:10}} bgcolor="#1976D2">
         <Container>
         <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Message Us</Box>
                    <Box>
                        <h4>About</h4>
                    </Box>
                    <Box>
                    <h4>Contact</h4>
                        
                    </Box>
                    <Box>
                    <h4>Support</h4>
                    
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>What We Do?</Box>
                    <Box>
                    <h4>Services</h4>
                        
                    </Box>
                    <Box>
                    <h4>FAQ</h4>
                    
                    </Box>
                    <Box>
                    <h4>Delivery Info</h4>
                        
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>Account</Box>
                    <Box>
                    <h4>Login</h4>
                 
                    </Box>
                    <Box>
                    <h4>Register</h4>
                    </Box>
                </Grid>

            </Grid>
            <Box textAlign="center" pt={{xs:5,sm:10}} pb={{xs:5,sm:0}}>
                Smart Baby Toys &reg;{new Date().getFullYear()}
            </Box>
         </Container>
        </Box>
    );
};

export default Footer;
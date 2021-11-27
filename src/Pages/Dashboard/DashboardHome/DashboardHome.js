import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <Box style={{display:'flex', justifyContent:'center'}}>
                <Box>
                <h1>Hey!  <span style={{margin:1, color:'green'}}>{user.displayName}</span> Welcome to Dashboard</h1>
                </Box>
            </Box>
        </div>
    );
};

export default DashboardHome;
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button} from "@mui/material";
import {

  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddProduct from "../AddProduct/AddProduct";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import MyOrders from "../MyOrders/MyOrders";
import DashboardHome from "../DashboardHome/DashboardHome";
import Pay from "../Pay/Pay";
import ManageOrder from "../ManageOrder/ManageOrder";
import ManageProducts from "../ManageProducts/ManageProducts";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HomeIcon from '@mui/icons-material/Home';
import AddTaskIcon from '@mui/icons-material/AddTask';
import SettingsIcon from '@mui/icons-material/Settings';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';
import LogoutIcon from '@mui/icons-material/Logout';
import ExploreIcon from '@mui/icons-material/Explore';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AddReview from "../AddReview/AddReview";
const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {admin,logout} = useAuth();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link style={{ textDecoration: "none",display:'flex', justifyContent:'center' }} to={`${url}`}>
        <Button color="inherit"> <HomeIcon sx={{fontSize:40, color:'green'}}/></Button>
      </Link>
      <br/>
      <Link style={{ textDecoration: "none" }} to="/exploretoys">
        <Button color="inherit"><ExploreIcon sx={{marginRight:2}}/> Explore Toys</Button>
      </Link>
      <br/>
      {
     admin && <Box>
          <Link style={{ textDecoration: "none" }} to={`${url}/makeAdmin`}>
        <Button color="inherit"><AdminPanelSettingsIcon sx={{marginRight:2}}/> Make Admin</Button>
      </Link>
      <Link style={{ textDecoration: "none" }} to={`${url}/addProduct`}>
        <Button color="inherit"><AddTaskIcon sx={{marginRight:2}}/> Add Product</Button>
      </Link>
      <Link style={{ textDecoration: "none" }} to={`${url}/manageOrders`}>
        <Button color="inherit"><SettingsIcon sx={{marginRight:2}}/> Manage Orders</Button>
      </Link>
      <Link style={{ textDecoration: "none" }} to={`${url}/manageProducts`}>
        <Button color="inherit"><PermDataSettingIcon sx={{marginRight:2}}/> Manage Products</Button>
      </Link>
     </Box>
   }
     {
       !admin && <Box>
          <Link style={{ textDecoration: "none" }} to={`${url}/pay`}>
        <Button color="inherit"><PaymentIcon sx={{marginRight:2}}/> Pay</Button>
      </Link>
      <br/>
      <Link style={{ textDecoration: "none" }} to={`${url}/myOrders`}>
        <Button color="inherit"><LocalMallIcon sx={{marginRight:2}}/>My Order</Button>
      </Link>
      <br/>
      <Link style={{ textDecoration: "none" }} to={`${url}/addReview`}>
        <Button color="inherit"><ReviewsIcon sx={{marginRight:2}}/>Add Review</Button>
      </Link>
       </Box>
     }
     
  
    <Link style={{ textDecoration: "none" }} to={`${url}`}>
        <Button color="inherit" onClick={logout}><LogoutIcon sx={{marginRight:2}}/> Logout</Button>
      </Link>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >

        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Smart Baby Toy Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      
          
       

        <Switch>
          <Route exact path={`${path}`}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route exact path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route exact path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route exact path={`${path}/addReview`}>
           <AddReview></AddReview>
          </Route>
          <AdminRoute exact path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute exact path={`${path}/manageOrders`}>
            <ManageOrder></ManageOrder>
          </AdminRoute>
          <AdminRoute exact path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <AdminRoute exact path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;

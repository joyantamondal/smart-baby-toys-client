import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ExploreToys from './Pages/ExploreToys/ExploreToys/ExploreToys';
import Order from './Pages/ExploreToys/Order/Order';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';


function App() {
  return (
    <div>
   <AuthProvider>
   <Router>
      
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/register">
          <Register></Register>
          </Route>
          <Route path="/exploretoys">
          <ExploreToys></ExploreToys>
          </Route>
          <PrivateRoute path="/order/:orderId">
          <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
        
    
       
       
        <Route  path="*">
        <NotFound></NotFound>
        </Route>
        </Switch>
      </Router>
   </AuthProvider>
     
    </div>
  );
}

export default App;

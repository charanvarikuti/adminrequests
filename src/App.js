import React from 'react';
import './App.css';

import  request from './request';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import { BrowserRouter as Router,NavLink ,Route,Switch,Link} from "react-router-dom";
import {Button} from 'react-bootstrap';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,Card,CardTitle, CardSubtitle} from 'reactstrap';
import {Container,Row,Col,Table } from 'reactstrap';
import {Dropdown,ButtonGroup} from 'reactstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
function App() {
  return (
    <div className="App">
    <Router>
    
    
    <Navbar dark color="dark" expand="md">
          <div class="container-fluid">
            <NavbarBrand className="mr-auto" href="/">Manage Student Request</NavbarBrand>
                
                <span className="tab1"></span>
                    <Nav navbar>
                         <NavItem>
                                               
                                <NavLink  className="nav-link " tag={Link} to='' ><br></br>
                               
                                <div> <span style={{marginLeft:"20px"}}>Show</span><select><option>All</option><option>Pending</option></select></div>
                                </NavLink>
                               
                              
                            </NavItem>
                
                </Nav>
      
          </div>
        </Navbar>
        <Nav>
            <NavLink  tag={Link}  to='/request'><br></br>
            <Card className="Rounded p-4">
              <div className="container" style={{textAlign:"left"}}>
               Student Name <br>
                </br>   
               Label <br>
                </br>   
               Requested Date<br>
                </br>           
             
                 <br></br>         
               <Button>
                 Open request
                  
                </Button>
                </div>
                </Card>  
            </NavLink>
        </Nav> 
      <Switch>
          <Route exact path="/request" component={request} />
   		</Switch>
    </Router>
      
      </div>

  );
}

export default App;

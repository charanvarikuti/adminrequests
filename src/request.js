import React from 'react';
import { Card,CardTitle, CardSubtitle,Container,Alert,Collapse} from 'reactstrap';

import './App.css';
import { Navbar,NavbarBrand } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import Button from 'react-bootstrap/Button';
import {Row,Col} from 'reactstrap';
class  request extends React.Component{
  render(){

		return(
            
			<div className="align offset-sm-2">
        <div className="cardcolor" >
        <Card className="Rounded p-3" >
            <Row>
              <CardSubtitle align="left" ><input type="text" value="Label Name"/></CardSubtitle>    
            </Row>
            <br></br>
            <div className="align offset-sm-2" style={{textAlign:"left"}} >
                      <Row>
                          <Col md="6">
                          <span >
                              <img src='assets/images/a.png' height="100" width="100" resizeMode= 'cover'></img>
                          </span>
                          </Col>

                          <Col md="6">
                              <input type="text" value="Student Name"/><br></br><br></br>
                              <h6>GITAM SCHOOL OF TECHNOLOGY </h6>
                          </Col>
                      </Row> 
                      <br></br>
                      <Row>
                          <Col md="6">
                          <h6>This Request was sent on <input type="date" value=" [Date of Request]"></input></h6>
                          </Col >
                      </Row> 
                      <br></br>
                      <Row>
                          <Col md="6">
                            <h6>Roll no:</h6>  
                          </Col>
                          <Col md="6">
                              <input type="text" value="Student Roll No"></input> 
                          </Col>
                      </Row>
                      <br></br>
                      <Row>
                          <Col md="6">
                            <h6>Current<input type="text" value="Label"></input></h6>  
                          </Col>
                          <Col md="6">
                              <input type="text" value="Current value"></input> 
                          </Col>
                      </Row>
                      <br></br>
                      <Row>
                          <Col md="6">
                            <h6>Requested <input type="text" value="Label"></input></h6>  
                          </Col>
                          <Col md="6">
                              <input type="text" value="Requested value"></input> 
                          </Col>
                      </Row>
                      <br></br>
                      <Row>
                          <Col md="6">
                            <h6>Proof</h6>  
                          </Col>
                          <Col md="6">
                              <input type="text" value="Uploaded file"></input> 
                          </Col>
                      </Row>

                      <br></br>
                      <Row>
                          <Col md="6">
                          <Button variant="info">Approve</Button>
                          </Col>
                          <Col md="6">
                          <Button variant="danger">Disapprove</Button>
                      
                          </Col>
                      </Row>
            </div> 
         </Card>
            </div>
            
            
          
      </div>

			

		);
	
}
}
export default request;
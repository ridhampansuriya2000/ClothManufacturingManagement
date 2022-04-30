import React from 'react'
//import styled from 'styled-components';
import employee from './emp2.jpg'
import row2 from './row2.jpg'
import vendor2 from './vendor2.jpg'
import attedance2 from './at1.jpg'
import f1 from './f1.jpg'
import e1 from './e1.jpg'
import "./body.css"
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Container,CardImg, CardGroup
  } from 'reactstrap';
import {Link} from "react-router-dom";
 function Footer() {
    return (
        <div>
            <br/>
        <Container>
          <CardGroup>
        <Row>
        
          
      <MDBCol md='6'>
        <MDBCard>
          <MDBCardImage top width="100%" src={e1}   overlay='white-slight'
            hover
            waves />
          <MDBCardBody className='elegant-color white-text rounded-bottom'>
            
            <MDBCardTitle>Employee Registration</MDBCardTitle>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
            <h6>Here you can enter Employee information</h6>
            </MDBCardText>
            <Link class="btn btn-secondary" to="/EmployeeRegistration">Employee Registration</Link>
         
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='6'>
      <MDBCard>
          <MDBCardImage top width="100%" src={vendor2}   overlay='white-slight'
            hover
            waves />
          <MDBCardBody className='elegant-color white-text rounded-bottom'>
            
            <MDBCardTitle>Vendor Registration</MDBCardTitle>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
            <h6>Here you can enter Vendor information</h6>
            </MDBCardText>
            <Link class="btn btn-secondary" to="/Vendor">Vendor Registration</Link>
         
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
            
      
      
      </Row>
      </CardGroup>
      <br/>
        <Row>
      

        <MDBCol md='4'>
        <MDBCard>
          <MDBCardImage top width="100%" src={row2}   overlay='white-slight'
            hover
            waves />
          <MDBCardBody className='elegant-color white-text rounded-bottom'>
            
            <MDBCardTitle>Raw Product Entry</MDBCardTitle>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
            <h6>Here you can enter New Raw product information</h6>
            </MDBCardText>
            <Link class="btn btn-secondary" to="/Row">Raw Product</Link>
         
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4'>
      <MDBCard>
          <MDBCardImage top width="100%" src={f1}   overlay='white-slight'
            hover
            waves />
          <MDBCardBody className='elegant-color white-text rounded-bottom'>
            
            <MDBCardTitle>Finish Product Entry</MDBCardTitle>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
            <h6>Here you can enter Finish product information</h6>
            </MDBCardText>
            <Link class="btn btn-secondary" to="/StockEntry">Finish Product</Link>
         
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4'>
      <MDBCard>
          <MDBCardImage top width="100%" src={attedance2 }   overlay='white-slight'
            hover
            waves />
          <MDBCardBody className='elegant-color white-text rounded-bottom'>
            
            <MDBCardTitle>Attendance</MDBCardTitle>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
            <h6>Here you can take attendance for employee</h6>
            </MDBCardText>
            <Link class="btn btn-secondary" to="/Attendance">Attendance</Link>
         
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </Row>

      
      
      </Container>
    </div>
    )
}
export default Footer;

/*
<Col >
            <Card body inverse color="info">
        <CardBody className="q4">
    
          <CardTitle><h5>Employee Registration</h5></CardTitle><br/><br/><br/><br/>
          <CardSubtitle><h6>Here you can enter Employee information</h6></CardSubtitle>
          <CardText></CardText>
            <Button href="/EmployeeRegistration">Employee Registration</Button>
         

        </CardBody>
      </Card>
      </Col>

      <Col >
      <Card body inverse color="info">
        <CardBody className="q4">
        
          <CardTitle><h5>Vendor Registration</h5></CardTitle>
          <CardSubtitle></CardSubtitle><br/><br/><br/><br/>
          <CardText><h6>Here you can enter Employee information</h6></CardText>
          <Button href="/Vendor">Vendor's Registration</Button>
        </CardBody>
      </Card>
      </Col>



      -->
      <Col md={4} >
       <Card body inverse color="info">
        <CardBody>
        <CardImg top width="100%" src={row2} className="q2" />
          <CardTitle><h5>Raw Product Entry</h5>  </CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>Here you enter new raw product entry</CardText><br/>
          <Button href="/Row">Raw Product</Button>
          

        </CardBody>
      </Card>
      </Col>
      <Col md={4} >
      <Card body inverse color="info">
        <CardBody>
        <CardImg top width="200%" src={finish} className="q2"/>
          <CardTitle><h5>Finish Product Entry</h5></CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>Here you enter new finish product entry </CardText><br/>
          <Button href="/StockEntry">Finish Product</Button>
        </CardBody>
      </Card> 
      </Col>
      
      <Col md={4} >
      <Card body inverse color="info">
        <CardBody>
        <CardImg top width="100%" src={attedance2} className="q2"/>
          <CardTitle><h5>Attendance</h5></CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>Here you enter employee daily Attendance record </CardText><br/>
          <Button href="/Attendance">Attendance</Button>
        </CardBody>
      </Card>
      </Col>
*/  
/*
import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const CardExample = () => {
  return (
    <MDBRow>
      <MDBCol md='3'>
        <MDBCard>
          <MDBCardImage
            top
            src='https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg'
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
          <MDBCardBody className='elegant-color white-text rounded-bottom'>
            <a href='#!' className='activator waves-effect waves-light mr-4'>
              <MDBIcon icon='share-alt' className='white-text' />
            </a>
            <MDBCardTitle>MDBCard Title</MDBCardTitle>
            <hr className='hr-light' />
            <MDBCardText className='white-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </MDBCardText>
            <a href='#!' className='black-text d-flex justify-content-end'>
              <h5 className='white-text'>
                Read more
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default CardExample;*/
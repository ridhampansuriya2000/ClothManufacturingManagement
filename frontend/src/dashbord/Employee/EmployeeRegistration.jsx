
import React from "react";
import { MDBRow, MDBCol, MDBBtn,MDBContainer, MDBInput} from "mdbreact";
import axios from 'axios'
import Link from '@material-ui/core/Link'
import './EmployeeRegistration.css'

import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";

import {
    Card, CardText, CardBody,Form,
    CardTitle, CardSubtitle, Button, Row, Col, Container
  } from 'reactstrap';
class EmployeeRegistration extends React.Component {
   constructor(props){
    super(props)
    this.state = {
      EmployeeID: null,
      EmployeeName: null,
      EmployeeGender:null,
      EmployeeMobile:null,
      EmployeeEmail:null,
      EmployeeAddress:null,
      E_count:null,
      E_price:null,
      data1:[]

    }}



componentDidMount(){
  this.getapiData();
}

  async getapiData(){
  let resp=await axios.get('/post')
  console.warn(resp.data.PTData)
  this.setState({data1:resp.data.PTData})
}


  submitHandler = event => {
    event.preventDefault();
    console.log(this.state)
      axios
        .post('EmployeeRegistration/',this.state)
        .then(response =>{
            console.log(response)
    })
      .catch(error =>{
          console.log(error)
    })
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    event.preventDefault()
    console.log(event)
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({ 
      [event.target.name]: event.target.value 
      });
  };

  changeHandler1 = event => {
    event.preventDefault()
    console.log(event)
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({ 
     E_price: event.target.value 
      });
  };
  changeHandler2 = event => {
    event.preventDefault()
    console.log(event)
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({ 
      price: "1000"
      });
  };
  render() {
    return (
     <div
      style={{
        backgroundColor: 'white',
        
      }}
    >
           <br/>
         <Container>
        <Col md={10}>
            <Card body inverse color="info">
        <CardBody>
        <h4> Employee Registration</h4>
          <CardText>
          
          
         <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBCol>
            <MDBRow md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                Employee ID
              </label>
              <input
                name="EmployeeID"
                defaultValue={("E-"+(Math.floor(Math.random()* 100+ 1)))}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="Employee ID"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBRow>
            <MDBRow md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Employee name
              </label>
              <input
                name="EmployeeName"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBRow>
            
            <MDBRow md="4" className="mb-3">
            <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Gender :
              </label>
             {/*
              <input
                name="EmployeeGender"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                placeholder="Gender"
                required
              />*/}
        <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
                className="tab"
              >
                 Male
              </label>
               <input
        type="radio"
        name="EmployeeGender"
        value="male"
        className="tab1"
        onChange={this.changeHandler}
        required
        />
          <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
                className="tab"
              >
                Female
              </label>
          <input
        type="radio"
        name="EmployeeGender"
        value="female"
        className="tab1"
        onChange={this.changeHandler}
        required
        />

              <div className="invalid-feedback">
                Please provide a Gender.
              </div>
              <div className="valid-feedback">Looks good!</div>
            
            </MDBRow>
            <MDBRow md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
               Employee Email
              </label>
              <input        
                name="EmployeeEmail"
                onChange={this.changeHandler}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                placeholder="Your Email address"
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </MDBRow>
            <MDBRow md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Employee Mobile
              </label>
              <input
                name="EmployeeMobile"
                onChange={this.changeHandler}
                type="number"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                placeholder="Mobile Number"
                required
              />
              <div className="invalid-feedback">
                Please provide a mobile number.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBRow>
            <MDBRow md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Address
              </label>
              <textarea
                name="EmployeeAddress"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                placeholder="Address"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid address.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBRow>

            <MDBRow md="4" className="mb-3">
            <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
              E_post :
              </label>
             {/*
              <input
                name="EmployeeGender"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                placeholder="Gender"
                required
              />*/}
        

<select className="tab" class="browser-default custom-select custom-select-lg mb-1" md="2"  onChange={this.changeHandler1}>
        {this.state.data1.map((item)=>(<option key={item} value={item.price} >{item.E_post}</option>))}
</select>

              <div className="invalid-feedback">
                Please provide a Gender.
              </div>
              <div className="valid-feedback">Looks good!</div>
            
            </MDBRow>
          
           

          <MDBRow md="4" className="mb-3">
                        <label
                          htmlFor="defaultFormRegisterPasswordEx4"
                          className="grey-text"
                        >
                        E_count
                        </label>
                        <input
                          name="E_count"
                          onChange={this.changeHandler}
                          type="E_count"
                          id="defaultFormRegisterPasswordEx4"
                          className="form-control"
                          placeholder="E_count"
                        
                        />
                        <div className="invalid-feedback">
                          Please provide a mobile number.
                        </div>
                        <div className="valid-feedback">Looks good!</div>
                      </MDBRow>



              <div className="valid-feedback">Looks good!</div>
          </MDBCol>
         
          <MDBBtn color="primary" type="submit">
            Submit Form
          </MDBBtn>
          
        </form>


          </CardText>
         
         

        </CardBody>
      </Card>
     
      </Col>
     
      
      </Container>
  
      
      </div>
    );
  }
}
export default EmployeeRegistration;






/*
<label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
                className="tab"
              >
                 Worker
              </label>
               <input
        type="radio"
        name="E_post"
        value="500"
        className="tab1"
        onChange={this.changeHandler1}
        required
        />
          <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
                className="tab"
              >
                Manager
              </label>
          <input
        type="radio"
        name="E_post"
        value="1000"
        className="tab1"
        onChange={this.changeHandler2}
        required
        />*/



/*import React, { Component } from 'react'
import { Form, FormGroup, Label, Input,Button,Col,Row} from 'reactstrap';
import axios from 'axios'

class EmployeeRegistration extends Component {
  constructor(props){
    super(props)
    this.state = {
  
  E_id: null,
  E_name: null,
  E_gender: null,
  E_contact: null,
  E_mail: null,
  E_address: null,
  E_count:'0'
    }
  }
handleSubmit = (event) => {
  event.preventDefault()
  console.log(this.state)
  axios
  .post('/EmployeeRegistration',this.state)
  .then(response =>{
    console.log(response)
  })
  .catch(error =>{
    console.log(error)
  })

}

handleInputChange = (event) => {
    event.preventDefault()
    console.log(event)
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({
      [event.target.name]:event.target.value
    })
}

render () {
const {E_id}= this.state
const {E_name}= this.state
const {E_gender}= this.state
const {E_contact}= this.state
const {E_mail}= this.state
const {E_address}= this.state

  return(
   
  <div className='b1'>
    <h1>{E_gender}</h1>
  <h1 className='title'>Employee Registration</h1>
  <Form onSubmit={this.handleSubmit}>

<br/>
<br/>
    
     <FormGroup className='l1'>
      <Row><Label className='sl1'>Employee ID</Label>
      <Col>	<Input className='sl11'
        type="text"
        name="E_id"
        onChange={this.handleInputChange}
        /></Col></Row>
     </FormGroup>
     
     <FormGroup className='l1'>
      <Row><Label className='sl2'>Employee Name</Label>
        <Col><Input className='sl11'
        type="text"
        name="E_name"
        onChange={this.handleInputChange}
        /></Col></Row>
     </FormGroup>
    
     <FormGroup className='l1'>
     <Row><Label className='sl3'>Employee Gender</Label>
     <Col>	<Input className='sl11'
        type="radio"
        name="E_gender"
        value="male"
        onChange={this.handleInputChange}
        /><Label>Male</Label></Col></Row>
     </FormGroup>
     <FormGroup className='l1'>
     <Row>
     <Col><Label></Label>	<Input className='sl11'
        type="radio"
        name="E_gender"
        value="female"

        onChange={this.handleInputChange}
        /><Label>Female</Label></Col></Row>
     </FormGroup>
    
        <FormGroup className='l1'>
     <Row><Label className='sl4'>Employee Mobile</Label>
     <Col>	<Input className='sl11'
        type="number"
        name="E_contact"
        onChange={this.handleInputChange}
        /></Col></Row>
     </FormGroup>
     <FormGroup className='l1'>
     <Row><Label className='sl8'>Employee Email</Label>
     <Col>	<Input className='sl11'
        type="email"
        name="E_mail"
        onChange={this.handleInputChange}
        /></Col></Row>
        </FormGroup>
     <FormGroup className='l1'>
        <Row><Label className='sl6'>Employee Address</Label>
        <Col><Input className='sl11'
        type="textarea"
        name="E_address"
        onChange={this.handleInputChange}
        /></Col></Row>
     </FormGroup>

    
     <Button className='sub' type="submit">Add</Button>

    </Form>	
  </div>


  )

}
}

export default EmployeeRegistration;
*/
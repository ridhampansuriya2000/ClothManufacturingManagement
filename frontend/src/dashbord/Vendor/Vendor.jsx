import React from "react";
import { MDBRow, MDBCol, MDBBtn,MDBContainer, MDBInput} from "mdbreact";
import axios from 'axios'
import Link from '@material-ui/core/Link'
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";
import "./v.css"
import {
    Card, CardText, CardBody,Form,
    CardTitle, CardSubtitle, Button, Row, Col, Container
  } from 'reactstrap';
class Vendor extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        VendorID:"",
        VendorName:"",
        VendorGender:"",
        VendorEmail:"",
        VendorMobile:"",
        VendorAddress:""
    }}
onClick = (nr) => () => {
  this.setState({
    radio: nr
  });
}
  submitHandler = event => {
    event.preventDefault();
    console.log(this.state)
      axios
        .post('VendorRegistration/',this.state)
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
        <h4> Vendor Registration</h4>
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
                VendorID
              </label>
              <input
                name="VendorID"
                // defaultValue={("V-"+(Math.floor(Math.random()* 100+ 1)))}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
				className="form-control"
			
                placeholder="Vendor ID"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBRow>
            <MDBRow md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Vendor name
              </label>
              <input
                name="VendorName"
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
        name="VendorGender"
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
        name="VendorGender"
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
               Vendor Email
              </label>
              <input        
                name="VendorEmail"
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
                Vendor Mobile
              </label>
              <input
                name="VendorMobile"
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
                name="VendorAddress"
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
export default Vendor;

/*import React,{Component} from 'react';
import { Form, FormGroup, Label, Input,Button,Col,Row} from 'reactstrap';
import axios from 'axios'
class Vendor extends Component{
    constructor(props){
      super(props)
      this.state = {
		  
		V_id: null,
		V_name: null,
		V_gender: null,
		V_mail: null,
		V_contact: null,
		V_address: null
      }
    }
  handleSubmit = (event) => {
	event.preventDefault()
	console.log(this.state)
	axios
	.post('/VendorRegistration',this.state)
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
    const {V_id}= this.state
	const {V_name}= this.state
	const {V_gender}= this.state
	const {V_mail}= this.state
	const {V_contact}= this.state
	const {V_address}= this.state

    return(
     
	  <div className='b1'>
	  <h1 className='title'>Vendor Registration</h1>
      <Form onSubmit={this.handleSubmit}>

<br/>
<br/>
      
			 <FormGroup className='l1'>
				<Row><Label className='sl1'>Vendor ID</Label>
				<Col>	<Input className='sl11'
					type="text"
					name="V_id"
					onChange={this.handleInputChange}
					/></Col></Row>
			 </FormGroup>
       
			 <FormGroup className='l1'>
				<Row><Label className='sl2'>Vendor Name</Label>
					<Col><Input className='sl11'
					type="text"
					name="V_name"
					onChange={this.handleInputChange}
					/></Col></Row>
			 </FormGroup>
      
			 <FormGroup className='l1'>
     <Row><Label className='sl3'>Vendor Gender</Label>
     <Col>  <Input className='sl11'
        type="radio"
        name="V_gender"
        value="male"
        onChange={this.handleInputChange}
        /><Label>Male</Label></Col></Row>
     </FormGroup>
     <FormGroup className='l1'>
     <Row>
     <Col><Label></Label> <Input className='sl11'
        type="radio"
        name="V_gender"
        value="female"

        onChange={this.handleInputChange}
        /><Label>Female</Label></Col></Row>
     </FormGroup>
			 
			 <FormGroup className='l1'>
       <Row><Label className='sl4'>Vendor Mobile</Label>
       <Col>	<Input className='sl11'
					type="text"
					name="V_contact"
					onChange={this.handleInputChange}
					/></Col></Row>
			 </FormGroup>
			 <FormGroup className='l1'>
       <Row><Label className='sl8'>Vendor Email</Label>
       <Col>	<Input className='sl11'
					type="text"
					name="V_mail"
					onChange={this.handleInputChange}
					/></Col></Row>
          </FormGroup>
			 <FormGroup className='l1'>
					<Row><Label className='sl6'>Vendor Address</Label>
          <Col><Input className='sl11'
					type="textarea"
					name="V_address"
					onChange={this.handleInputChange}
					/></Col></Row>
			 </FormGroup>
       <Button className='sub' type="submit">Add</Button>

			</Form>	
	  </div>


    )

  }
  }
export default Vendor;*/
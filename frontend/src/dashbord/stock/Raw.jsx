import React from "react";
import { MDBRow, MDBCol, MDBBtn,MDBContainer, MDBInput} from "mdbreact";
import axios from 'axios'
import Link from '@material-ui/core/Link'

import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";

import {
    Card, CardText, CardBody,Form,
    CardTitle, CardSubtitle, Button, Row, Col, Container
  } from 'reactstrap';
class Raw extends React.Component{
    constructor(props){
    super(props)
    this.state = {
      data:[]
    }}
onClick = (nr) => () => {
  this.setState({
    radio: nr
  });
}
 componentDidMount(){
    this.getapiData();
  }

    async getapiData(){
    let resp=await axios.get('/VendorRegistration')
    console.warn(resp.data.VendorData)
    this.setState({data:resp.data.VendorData})
  }  

  submitHandler = event => {
    event.preventDefault();
    console.log(this.state)
      axios
        .post('RowEntry/',this.state)
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

  render () {

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
        <h4> Raw Entry</h4>
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
                RowID
              </label>
              <input
				name="RowID"
				defaultValue={("R-"+(Math.floor(Math.random()* 100+ 1)))}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="RowID"
                required
              />
         <div className="invalid-feedback">
                Please provide a ID.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBRow>
            <MDBRow md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                MatrialName
              </label>
              <input
                name="MatrialName"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="MatrialName"
                required
              />
         <div className="invalid-feedback">
                Please provide a Matrial.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBRow>
            
            <MDBRow md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
               Quantity
              </label>
              <input        
                name="Quantity"
                onChange={this.changeHandler}
                type="number"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                placeholder="Quantity"
                required
              />
         <div className="invalid-feedback">
                Please provide a Quantity.
              </div>
            </MDBRow>
            <MDBRow md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Price
              </label>
              <input
			  name="Price"
			  onChange={this.changeHandler}
			  type="number"
			  id="defaultFormRegisterPasswordEx4"
			  className="form-control"
			  placeholder="Price"
			  required
			/>
			<div className="invalid-feedback">
			  Please provide a Price.
			</div>
			<div className="valid-feedback">Looks good!</div>
		  </MDBRow>
		  <MDBRow md="4" className="mb-3">
			<label
			  htmlFor="defaultFormRegisterPasswordEx4"
			  className="grey-text"
			>
			  Date of Purchase
			</label>
			<input
			  name="DateofPurchase"
			  onChange={this.changeHandler}
			  type="date"
			  id="defaultFormRegisterPasswordEx4"
			  className="form-control"
			  placeholder="Date"
			  required
			/>
			<div className="invalid-feedback">
			  Please provide a Valid Date.
			</div>
			<div className="valid-feedback">Looks good!</div>
		  </MDBRow>

	<MDBRow md="4" className="mb-3">
			<label
			  htmlFor="defaultFormRegisterPasswordEx4"
			  className="grey-text"
			>
			  VendorID
			</label>
			<select className="tab" class="browser-default custom-select custom-select-lg mb-1" md="2" name="VendorID" onChange={this.changeHandler}>
				  {this.state.data.map((item)=>(<option key={item}  value={item.VendorID} >{item.VendorName}</option>))}
			</select>
			<div className="invalid-feedback">
			  Please provide a Valid ID.
			</div>
			<div className="valid-feedback">Looks good!</div>
		  </MDBRow>


	<MDBRow md="4" className="mb-3">
			<label
			  htmlFor="defaultFormRegisterPasswordEx4"
			  className="grey-text"
			>
			  Invoice Number
			</label>
			<input
			  name="InvoiceNumber"
			  onChange={this.changeHandler}
			  type="text"
			  id="defaultFormRegisterPasswordEx4"
			  className="form-control"
			  placeholder="Invoice Number"
			  required
			/>
			<div className="invalid-feedback">
			  Please provide a Invoice Number.
			</div>
			<div className="valid-feedback">Looks good!</div>
		  </MDBRow>

	<MDBRow md="4" className="mb-3">
			<label
			  htmlFor="defaultFormRegisterPasswordEx4"
			  className="grey-text"
			>
			  Cost per Unit
			</label>
			<input
			  name="CPU"
			  onChange={this.changeHandler}
			  type="number"
			  id="defaultFormRegisterPasswordEx4"
			  className="form-control"
			  placeholder="Cost per Unit"
			  required
			/>
			<div className="invalid-feedback">
			  Please provide a Cost per Unit.
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
export default Raw;

/*import React,{Component} from 'react';
import { Form, FormGroup, Label, Input,Button,Col,Row} from 'reactstrap';
import axios from 'axios'	
import './Raw.css'
class Raw extends Component{

	
    constructor(props){
      super(props)
      this.state = {
		data : [],
		R_id: null,
		R_name:null ,
		R_quantity: null,
		price: null,
		DateOfPurchase: null,
		V_id:null ,
		InvoiceNumber:null ,
		Costperunit: null

      }
    }
	handleSubmit = (event) => {
		event.preventDefault()
		console.log(this.state)
		axios
		.post('/RowEntry',this.state)
		.then(response =>{
		  console.log(response)
		})
		.catch(error =>{
		  console.log(error)
		})
	}
	componentDidMount(){
		this.getapiData()
	}

	async getapiData(){
		let resp=await axios.get('/VendorRegistration')
		console.warn(resp.data.VendorData)
		this.setState({data:resp.data.VendorData})
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
    const {R_id}= this.state
	const {R_name}= this.state
	const {R_quantity}= this.state
	const {price}= this.state
	const {DateOfPurchase}= this.state
	const {V_id}= this.state
	const {InvoiceNumber}= this.state
	const {Costperunit}= this.state

    return(
		
	  <div className='b1'>
		  <p1>	{R_id}: ,
				{R_name}: ,
				{R_quantity}: ,
				{price}: ,
				{DateOfPurchase}: ,
				{V_id}: ,
				{InvoiceNumber}: ,
				{Costperunit}: </p1>

	  		<h1 className='title'>Row Matrial Entry</h1>
    		<Form onSubmit={this.handleSubmit}>
		
			
			
		<div>
		{
			this.state.data.length>0?
			<div>{
				this.state.data.map((item)=>
				<h6>{item.V_contact}   {item.V_mail}</h6>
				)
 			 }</div>
			:
			<div>{
			<h1>data is loading</h1>
  			}</div>
		}
		</div>


<br/>
<br/>
      
			 <FormGroup className='l1'>
				<Row><Label className='sl1'>Row ID</Label>
				<Col>	<Input className='sl11'
					type="text"
					name="R_id"
					onChange={this.handleInputChange}
					/></Col></Row>
			 </FormGroup>
       
			 <FormGroup className='l1'>
				<Row><Label className='sl2'>MatrialName</Label>
					<Col><Input className='sl11'
					type="text"
					name="R_name"
					onChange={this.handleInputChange}
					/></Col></Row>
			 </FormGroup>
      
			 <FormGroup className='l1'>
       <Row><Label className='sl3'>Quantity</Label>
       <Col>	<Input className='sl11'
					type="text"
					name="R_quantity"
					onChange={this.handleInputChange}
					/></Col></Row>
			 </FormGroup>
			 
			 <FormGroup className='l1'>
       <Row><Label className='sl4'>Price</Label>
       <Col>	<Input className='sl11'
					type="text"
					name="price"
					onChange={this.handleInputChange}
					/></Col></Row>
			 </FormGroup>
			 <FormGroup className='l1'>
       <Row><Label className='sl8'>Date of Purchase</Label>
       <Col>	<Input className='sl11'
					type="date"
					name="DateOfPurchase"
					onChange={this.handleInputChange}
					/></Col></Row>
          </FormGroup>
			 <FormGroup className='l1'>
					<Row><Label className='sl6'>VendorID</Label>
          	<Col>
		  	<select name="V_id" onChange={this.handleInputChange}>
		
				{this.state.data.map((item)=>(<option key={item}  value={item.V_id} >{item.V_name}</option>))}
			
			</select>
			</Col></Row>
			 </FormGroup>
			 <FormGroup className='l1'>
					<Row><Label className='sl6'>Invoice Number</Label>
          <Col><Input className='sl11'
					type="text"
					name="InvoiceNumber"
					onChange={this.handleInputChange}
					/></Col></Row>
			 </FormGroup>
			 <FormGroup className='l1'>
					<Row><Label className='sl6'>Cost per Unit</Label>
          <Col><Input className='sl11'
					type="text"
					name="Costperunit"
					onChange={this.handleInputChange}
					/></Col></Row>
			 </FormGroup>
       <Button className='sub' type="submit">Add</Button>

			</Form>	
	  </div>


    )

  }
  }
export default Raw;*/
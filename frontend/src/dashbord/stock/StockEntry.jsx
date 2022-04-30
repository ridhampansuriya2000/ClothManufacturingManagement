import React from "react";
import { MDBRow, MDBCol, MDBBtn,MDBContainer, MDBInput} from "mdbreact";
import axios from 'axios';
// import Link from '@material-ui/core/Link';
import {Link} from "react-router-dom";
// import Link from 'react-router';
// import {useHistory, useParams} from "react-router";


import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";

import {
    Card, CardText, CardBody,Form,
    CardTitle, CardSubtitle, Button, Row, Col, Container
  } from 'reactstrap';
class StockEntry extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      data:[]
    }}
onClick = (nr) => () => {
  this.setState({
    radio: nr
  });
};
componentDidMount(){
    this.getapiData();
  }

    async getapiData(){
    let resp=await axios.get('/EmployeeRegistration')
    console.warn(resp.data.students)
    this.setState({data:resp.data.students})
  }
  submitHandler = event => {
    event.preventDefault();
    console.log(this.state);
      axios
        .post('/StockEntry',this.state)
        .then(response =>{
            console.log("======>", response);
            // this.props.history.push(`/Home`);
            // this.props.history.push('/Home');
    })
      .catch(error =>{
          console.log(error);
          this.history.push(`/Home`);
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
        <h4> Stock Entry</h4>
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
                ProductID
              </label>
              <input
                name="ProductID"
                defaultValue={("F-"+(Math.floor(Math.random()* 100+ 1)))}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="ProductID"
                required
              />
              <div className="invalid-feedback">
                Please provide a Product ID.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBRow>
            <MDBRow md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Product Type
              </label>
              <input
                name="ProductType"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Product Type"
                required
              />
              <div className="invalid-feedback">
                Please provide a Product Type.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBRow>

            <MDBRow md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
               Length
              </label>
              <input
                name="Length"
                onChange={this.changeHandler}
                type="number"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                placeholder="Length"
                required
              />
              <div className="invalid-feedback">
                Please provide a Valid Length.
              </div>
            </MDBRow>
             <MDBRow md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Date
              </label>
              <input
                name="Date"
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
                Employee ID
              </label>
              <select className="tab" class="browser-default custom-select custom-select-lg mb-1" md="1" name="EID" onChange={this.changeHandler} >
                    {this.state.data.map((item)=>(<option key={item}  value={item.EmployeeID} >{item.EmployeeName}</option>))}
              </select >

              <div className="invalid-feedback">
                Please provide a Employee.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBRow>


              <div className="valid-feedback">Looks good!</div>
          </MDBCol>


                 {/*onSubmit={this.submitHandler}*/}
             {/*<Link class="btn-primary btn Ripple-parent"   to="/Home" >*/}
         <MDBBtn color="primary" type="submit" onSubmit={this.submitHandler}>
             Submit Form
          </MDBBtn>
             {/*</Link>*/}


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
export default StockEntry;


/*import React,{Component} from 'react';
import { Form, FormGroup, Label, Input,Button,Col,Row} from 'reactstrap';
import axios from 'axios'

class StockEntry extends Component{
    constructor(props){
      super(props)
      this.state = {
      
    P_id: null,
    P_type: null,
    length: null,
    date: null,
    E_id: null
      }
    }
  
    handleSubmit = (event) => {
      event.preventDefault()
      console.log(this.state)
      axios
      .post('/StockEntry',this.state)
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
    const {P_id}= this.state
  const {P_type}= this.state
  const {length}= this.state
  const {date}= this.state
  const {E_id}= this.state
    return(
     
    <div className='b1'>
    <h1 className='title'>Stock Entry</h1>
    <Form onSubmit={this.handleSubmit}>

<br/>
<br/>
    
       <FormGroup className='l1'>
        <Row><Label className='sl1'>Product ID</Label>
        <Col>  <Input className='sl11'
          type="text"
          name="P_id"
          onChange={this.handleInputChange}
          /></Col></Row>
       </FormGroup>
       
       <FormGroup className='l1'>
        <Row><Label className='sl2'>Product Type</Label>
          <Col><Input className='sl11'
          type="text"
          name="P_type"
          onChange={this.handleInputChange}
          /></Col></Row>
       </FormGroup>
      
       <FormGroup className='l1'>
       <Row><Label className='sl3'>Length</Label>
       <Col>  <Input className='sl11'
          type="text"
          name="length"
          onChange={this.handleInputChange}
          /></Col></Row>
       </FormGroup>
       
       <FormGroup className='l1'>
       <Row><Label className='sl4'>Date</Label>
       <Col>  <Input className='sl11'
          type="Date"
          name="date"
          onChange={this.handleInputChange}
          /></Col></Row>
       </FormGroup>

       <FormGroup className='l1'>
       <Row><Label className='sl8'>EID</Label>
       <Col>  <Input className='sl11'
          type="text"
          name="E_id"
          onChange={this.handleInputChange}
          /></Col></Row>
          </FormGroup>
       <Button className='sub' type="submit">Add</Button>

      </Form>  
    </div>


    )

  }
  }
export default StockEntry;*/
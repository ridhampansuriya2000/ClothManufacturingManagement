
import React, { Component } from 'react'
import axios from 'axios'  
import { Table } from 'semantic-ui-react'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";

import { MDBRow, MDBCol, MDBBtn, MDBInput} from "mdbreact";

import {
    Card, CardText, CardBody,Form,
    CardTitle, CardSubtitle, Button, Row, Col, Container
  } from 'reactstrap';
import Link from '@material-ui/core/Link';

class Post extends Component {
  constructor(props){
    super(props);
    this.state ={
      k:'',
      data:[]  
  }
    }
    componentDidMount(){
    this.getapiData();
  }

  async getapiData(){
    let resp=await axios.get('/post')
    console.warn(resp.data.PTData)
    this.setState({data:resp.data.PTData})

          }

          submitHandler = event => {
            event.preventDefault();
            console.log(this.state)
              axios
                .post('/post',this.state)
                .then(response =>{
                    console.log(response)
            })
              .catch(error =>{
                  console.log(error)
            })
            event.target.className += " was-validated";
          };

          changeHandler = (event)=>{
      this.setState({
          [event.target.name]:event.target.value
      })
    }
  render() {

        
    return (
      <div>
      <Container>
      <MDBBreadcrumb>
                <MDBBreadcrumbItem><Link color="inherit" href="/Home">Home</Link></MDBBreadcrumbItem>
                <MDBBreadcrumbItem > <Link color="inherit" href="/Reports">Reports</Link></MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>Post</MDBBreadcrumbItem>
        
           </MDBBreadcrumb>
        <Col md={10}>
            <Card body inverse color="info">
        <CardBody>
        <h4> Post</h4>
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
                Post
              </label>
              <input
                name="E_post"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="E_post"
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
                price
              </label>
              <input
                name="price"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="price"
                required
              />
         <div className="invalid-feedback">
                Please provide a Matrial.
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


      )
  }
}
export default Post;

/*<select className="tab" class="browser-default custom-select custom-select-lg mb-1" md="2" name="VendorID" onChange={this.changeHandler}>
        {this.state.data.map((item)=>(<option key={item} value={item.E_post} >{item.E_post}</option>))}
</select>*/
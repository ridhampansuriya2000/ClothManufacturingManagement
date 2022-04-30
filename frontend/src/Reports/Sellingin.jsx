import React, { Component } from 'react'
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";
import Link from '@material-ui/core/Link';


 class Sellingin extends Component {
    constructor(props){
        super(props)
        this.state = {
      
            ProductID: null
        }
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
   
      render() {
        return (
          <div>
              <MDBContainer>
              <MDBBreadcrumb light color="secondary">
          <MDBBreadcrumbItem><Link color="inherit" href="/Home">Home</Link></MDBBreadcrumbItem>
          <MDBBreadcrumbItem > <Link color="inherit" href="/Reports">Reports</Link></MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Selling Inquiry</MDBBreadcrumbItem>
        </MDBBreadcrumb>
            <form
              className="needs-validation"
              onSubmit={this.submitHandler}
              noValidate
            >
              <MDBRow>
                <MDBCol md="4" className="mb-3">
                  <label>
                  Product ID
                  </label>
                  <input
                    name="ProductID"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Selling ID"
                  />
                </MDBCol>
                
               
              <MDBCol md="4" className="mb-3">
                <div className="custom-control custom-checkbox pl-3">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                
                 
                </div>
              <MDBBtn color="primary" type="submit">
                Get Details
              </MDBBtn>
              </MDBCol>
              </MDBRow>


            </form>
            </MDBContainer>

          </div>
          
        )
    }
}
export default Sellingin;
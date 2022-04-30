
import React, { Component } from 'react'
import axios from 'axios'  
import { Table } from 'semantic-ui-react'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";

import Link from '@material-ui/core/Link';

class StockIn extends Component {
  constructor(props){
    super(props);
    this.state ={
      k:'',
      data:[]   }
    }
    componentDidMount(){
    this.getapiData();
  }
//   async  Delete (event,item){

// }

    Delete = async (event,id) => {
      console.log("delet function loaded");
      event.preventDefault();
      console.log("id of element--->>",id);
      await axios.delete(`http://localhost:8000/StockEntry/product/${id}`)
      this.getapiData();

  }

  async getapiData(){
    let resp = await axios.get('/Stockentry1')
    console.warn(resp.data.StockData)
    this.setState({data:resp.data.StockData})

          }

    handleChange = (event)=>{
      this.setState({
          [event.target.name]:event.target.value
      })
    }
  render() {

        const data = this.state.data.filter(song => song.ProductType.includes(this.state.k))
    return (
      <div>
      <MDBContainer>
      
        <MDBBreadcrumb light color="secondary">
          <MDBBreadcrumbItem><Link color="inherit" href="/Home">Home</Link></MDBBreadcrumbItem>
          <MDBBreadcrumbItem > <Link color="inherit" href="/Reports">Reports</Link></MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Product Inquiry</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <h1 className="tab3" >Products Details</h1>
      <form>
        <label className="tab4" htmlFor="search">Search for Product</label>
        <input className="tab1" type="text" id="search" name="k" value={this.state.k} onChange={this.handleChange} />
    <MDBTable color="theme.palette.primary.main" striped>
          <MDBTableHead>

    <tr>
      <th>Product ID</th>
      <th>Date</th>
      <th>Product Name</th>
      <th>Length</th>
      <th>Action </th>
    </tr>
      </MDBTableHead>
      <MDBTableBody>

        {
          data && data.map(element => {
            // console.log("element of loop--->",element)
            return(
            <tr>
                <th>
                {element.ProductID}
                </th>
                <th>
                {element.Date}
                </th>
                <th>
                {element.ProductType}
                </th>
                <th>
                {element.Length}
                </th>
              <th>
                <button onClick={(event) => this.Delete(event,element._id)}>Delete</button>
              </th>
            </tr>
            )
          })
        }
      </MDBTableBody>

    </MDBTable>

        
      </form>
              </MDBContainer>

      </div>
    )
  }
}
export default  StockIn;

/*import React, { Component } from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Link from '@material-ui/core/Link';

import axios from 'axios'
import { Form, FormGroup, Label, Input,Button,Col,Row} from 'reactstrap';

class Product extends Component {
  
         
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
    
    render () {
    const {ProductID}= this.state
   
            return (
              <div><MDBBreadcrumb>
                  <MDBBreadcrumbItem><Link color="inherit" href="/Home">Home</Link></MDBBreadcrumbItem>
                 <MDBBreadcrumbItem > <Link color="inherit" href="/Reports">Reports</Link></MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Product</MDBBreadcrumbItem>
            </MDBBreadcrumb>
                <form
                  className="needs-validation"
                  onSubmit={this.handleSubmit}
                  noValidate
                >
                  <MDBRow>
                    <MDBCol md="4" className="mb-3">
                      <label
                        htmlFor="defaultFormRegisterNameEx"
                      >
                        ProductID
                      </label>
                      <input
                        name="ProductID"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="ProductID"
                      />
                    </MDBCol>
                   
                  </MDBRow>
                  <MDBBtn color="primary" type="submit">
                    Submit
                  </MDBBtn>
                </form>
              </div>
            );
          }
        }
export default Product;*/
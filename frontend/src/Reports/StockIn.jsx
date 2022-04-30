
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

  Delete = async (event,id) => {
    console.log("delet function loaded");
    event.preventDefault();
    console.log("id of element--->>",id);
    await axios.delete(`http://localhost:8000/StockEntry/product/${id}`)
    this.getapiData();
  }

	async getapiData(){
		let resp=await axios.get('/RowEntry')
		console.warn(resp.data.RowData)
		this.setState({data:resp.data.RowData})

        	}

    handleChange = (event)=>{
      this.setState({
          [event.target.name]:event.target.value
      })
    }
  render() {

        const data = this.state.data.filter(song => song.MatrialName.toLowerCase().includes(this.state.k.toLowerCase()))
    return (
      <div>
      <MDBContainer>
              <MDBBreadcrumb light color="secondary">
          <MDBBreadcrumbItem><Link color="inherit" href="/Home">Home</Link></MDBBreadcrumbItem>
          <MDBBreadcrumbItem > <Link color="inherit" href="/Reports">Reports</Link></MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Row Inquiry</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <h1 className="tab4" >Row Matreial Details</h1>
      <form>
        <label className="tab8" htmlFor="search">Search for Row</label>
        <input className="tab1" type="text" id="search" name="k" value={this.state.k} onChange={this.handleChange} />
    <MDBTable color="theme.palette.primary.main" striped>
          <MDBTableHead>

    <tr>
      <th>Row ID</th>
      <th>Date</th>
      <th>Product Name</th>
      <th>Length</th>
      <th>Action </th>
    </tr>
      </MDBTableHead>
      <MDBTableBody>

        {
          data.map(element=>{
            return(
            <tr>
                <th>
                {element.RowID}
                </th>
                <th>
                {element.DateofPurchase}
                </th>
                <th>
                {element.MatrialName}
                </th>
                <th>
                {element.Quantity}
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

  async getapiData(){
    let resp=await axios.get('/Stockentry1')
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
    </tr>
      </MDBTableHead>
      <MDBTableBody>

        {
          data.map(element=>{
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
*/

/*import React, { Component } from 'react'
import {Link} from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import axios from 'axios'	


 class Stockin extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
      }
    
    componentDidMount(){
		this.getapiData()
	}

	async getapiData(){
		let resp=await axios.get('/Billing')
		console.warn(resp.data.BillingData)
		this.setState({data:resp.data.BillingData})
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


    componentDidMount(){
		this.getapiData()
	}

	async getapiData(){
		let resp=await axios.get('/Billing')
		console.warn(resp.data.BillingData)
		this.setState({data:resp.data.BillingData})
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
    const {SellingID}= this.state
   
            return (
              <div>
           
            <form onSubmit={this.submitHandler}>
                  			<label>Purchase ID</label>
               
                <select name="SID" onChange={this.handleInputChange}>
		
				        {this.state.data.map((item)=>(<option key={item}  value={item.VID} >{item.SID}</option>))}
			
			          </select>
                <Button variant="primary" type="submit">
    Submit
  </Button>
            </form>
          </div>
          
        )
    }
}
export default Stockin;*/
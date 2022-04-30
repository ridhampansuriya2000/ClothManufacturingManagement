/*import React, { Component } from 'react'
import { Form, FormGroup, Label, Input,Button,Col,Row} from 'reactstrap';
import axios from 'axios'

class Bill extends Component {
  constructor(props){
    super(props)
    this.state = {
  
  SID: null,
  PID: null,
  VID: null,
  Price: null,
  Length: null,
  DOS: null,
  Invoice: null,
    }
  }
handleSubmit = (event) => {
  event.preventDefault()
  console.log(this.state)
  axios
  .post('/Billing',this.state)
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
const {SID}= this.state
const {PID}= this.state
const {VID}= this.state
const {Price}= this.state
const {Length}= this.state
const {DOS}= this.state
const {Invoice}=this.state

  return(
   
  <div className='b1'>
  <h1 className='title'>Billing</h1>
  <Form onSubmit={this.handleSubmit}>

<br/>
<br/>
    
     <FormGroup className='l1'>
      <Row><Label className='sl1'>Selling ID</Label>
      <Col>	<Input className='sl11'
        type="text"
        name="SID"
        onChange={this.handleInputChange}
        /></Col></Row>
     </FormGroup>
     
     <FormGroup className='l1'>
      <Row><Label className='sl2'>Product ID</Label>
        <Col><Input className='sl11'
        type="text"
        name="PID"
        onChange={this.handleInputChange}
        /></Col></Row>
     </FormGroup>
    
     
    
        <FormGroup className='l1'>
     <Row><Label className='sl4'>Vendor ID</Label>
     <Col>	<Input className='sl11'
        type="text"
        name="VID"
        onChange={this.handleInputChange}
        /></Col></Row>
     </FormGroup>
     <FormGroup className='l1'>
     <Row><Label className='sl8'>Price</Label>
     <Col>	<Input className='sl11'
        type="text"
        name="Price"
        onChange={this.handleInputChange}
        /></Col></Row>
        </FormGroup>
     <FormGroup className='l1'>
        <Row><Label className='sl6'>Length</Label>
        <Col><Input className='sl11'
        type="text"
        name="Length"
        onChange={this.handleInputChange}
        /></Col></Row>
     </FormGroup>
     <FormGroup className='l1'>
       <Row><Label className='sl4'>Date of Sell</Label>
       <Col>  <Input className='sl11'
          type="Date"
          name="DOS"
          onChange={this.handleInputChange}
          /></Col></Row>
       </FormGroup>

       <FormGroup className='l1'>
        <Row><Label className='sl6'>Invoice</Label>
        <Col><Input className='sl11'
        type="text"
        name="Invoice"
        onChange={this.handleInputChange}
        /></Col></Row>
     </FormGroup>
    
     <Button className='sub' type="submit">Add</Button>

    </Form>	
  </div>


  )

}
}

export default Bill;
*/
import React, { Component } from 'react'
import {Link} from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import axios from 'axios'	
import { Form, FormGroup, Label, Input,Col,Row,Table} from 'reactstrap';

class Stockin extends Component {
    constructor(props){
        super(props)
        this.state = {
            data1 : [],
            data2 : [],
            BillID: null,
            Dos: null,
            Invoice: null,
            VendorID: null,
            ProductID1: null,
            ProductID2: null,
            ProductID3: null,
            p1:null,
            p2:null,
            p3:null,
            q1:null,
            q2:null,
            q3:null,
            t1:null,
            t2:null,
            t3:null,
            t:null,
            sgst:null,
            total:null
        }
      }
    
    componentDidMount(){
		this.getapiData1();
    this.getapiData2();
	}

	async getapiData1(){
		let resp=await axios.get('/Stockentry')
		console.warn(resp.data.StockData)
		this.setState({data1:resp.data.StockData})
	}
  	async getapiData2(){
		let resp=await axios.get('/VendorRegistration')
		console.warn(resp.data.VendorData)
		this.setState({data2:resp.data.VendorData})
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
  handlen1=event=>{
    this.setState({
      p1:event.target.value
     
    })
  }
     handlen2=event=>{
    this.setState({
     p2:event.target.value
    })
  }
   handlen3=event=>{
    this.setState({
      p3:event.target.value   
    })
  }
  
  handlenq1=event=>{
    this.setState({
      q1:event.target.value
    })
  }
     handlenq2=event=>{
    this.setState({
      q2:event.target.value
    })
  }
   handlenq3=event=>{
    this.setState({
      q3:event.target.value
    })
  }

  handleSubmit=(event)=>{
     this.setState({t1:(parseFloat(this.state.p1)* parseFloat(this.state.q1))})
    this.setState({t2:(parseFloat(this.state.p2)*parseFloat(this.state.q1))})
    this.setState({t3:(parseFloat(this.state.p3)*parseFloat(this.state.q1))})
    this.setState({t: (parseFloat(this.state.p1)* parseFloat(this.state.q1))+(parseFloat(this.state.p2)*parseFloat(this.state.q1))+(parseFloat(this.state.p3)*parseFloat(this.state.q1))})
   //
   this.setState({sgst:((parseFloat(this.state.p1)* parseFloat(this.state.q1))+(parseFloat(this.state.p2)*parseFloat(this.state.q1))+(parseFloat(this.state.p3)*parseFloat(this.state.q1))*0.06)})
    //this.setState({total:parseFloat(this.state.t)+(parseFloat(this.state.t)*0.06)+(parseFloat(this.state.t)*0.06)})
    this.setState({total:(parseFloat(this.state.p1)* parseFloat(this.state.q1))+(parseFloat(this.state.p2)*parseFloat(this.state.q1))+(parseFloat(this.state.p3)*parseFloat(this.state.q1))+(((parseFloat(this.state.p1)* parseFloat(this.state.q1))+(parseFloat(this.state.p2)*parseFloat(this.state.q1))+(parseFloat(this.state.p3)*parseFloat(this.state.q1)))*0.06)+(((parseFloat(this.state.p1)* parseFloat(this.state.q1))+(parseFloat(this.state.p2)*parseFloat(this.state.q1))+(parseFloat(this.state.p3)*parseFloat(this.state.q1)))*0.06)})
    event.preventDefault()
     console.log(this.state)
  axios
  .post('/Billing',this.state)
  .then(response =>{
    console.log(response)
  })
  .catch(error =>{
    console.log(error)
  })



  }

 delete(ProductID1) {
  axios.delete('/StockEntry/' + ProductID1)
      .then((res) => {
          console.log('Student successfully deleted!')
      }).catch((error) => {
          console.log(error)
      })
}


    render () {
            return (
              <div> 
              <FormGroup className='l1'>          
              <h3 className='sl1'>Billing</h3>
              </FormGroup>
              <Form onSubmit={this.handleSubmit}>

              <br/>
              <br/>
    
              <FormGroup className='l1'>
              <Row><Label className='sl1'>Bill ID</Label>
                <Col>	<Input className='sl11'
                type="text"
                name="BillID"
                onChange={this.handleInputChange}
              /></Col></Row>
              </FormGroup>
              
              <FormGroup className='l1'>
              <Row><Label className='sl4'>Date</Label>
                <Col>  <Input className='sl11'
                type="Date"
                name="Dos"
                onChange={this.handleInputChange}
              /></Col></Row>
              </FormGroup>
              
              <FormGroup className='l1'>
              <Row><Label className='sl1'>Invoice Number</Label>
                <Col>	<Input className='sl11'
                type="text"
                name="Invoice"
                onChange={this.handleInputChange}
              /></Col></Row>
              </FormGroup>
     
              <FormGroup className='l1'>
               <Row>
                <label className='sl1'>Vendor Name</label>
                <Col>
                <select name="VendorID" onChange={this.handleInputChange}>
				            {this.state.data2.map((item)=>(<option key={item}  value={item.VendorID} >{item.VendorName}</option>))}
			          </select> 
                </Col>
               </Row>
              </FormGroup>
              <br/>
              <br/>

  <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Product</th>
      <th>Price</th>
      <th>Length</th>
      <th>Sub Total</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1</td>
      <td><select name="ProductID1" onChange={this.handleInputChange} >
				      {this.state.data1.map((item)=>(<option key={item}  value={item._id} >{item.ProductType}</option>))}			
			    </select></td>
      <td><Input type="text"  value={this.state.p1} onChange={this.handlen1} /></td>
      <td><Input type="text"  value={this.state.q1} onChange={this.handlenq1} /></td>
      <td> {this.state.t1}</td>
    </tr>

    <tr>
      <td>2</td>
      <td><select name="ProductID2" onChange={this.handleInputChange}>
				      {this.state.data1.map((item)=>(<option key={item}  value={item.ProductID} >{item.ProductType}</option>))}			
			    </select></td>
      <td><Input type="text" value={this.state.p2} onChange={this.handlen2} /></td>
      <td><Input type="text"  value={this.state.q2} onChange={this.handlenq2} /></td>
      <td>  {this.state.t2}</td>
    </tr>

      <tr>
      <td>3</td>
      <td><select name="ProductID3" onChange={this.handleInputChange}>
				      {this.state.data1.map((item)=>(<option key={item}  value={item.ProductID} >{item.ProductType}</option>))}			
			    </select></td>
      <td><Input type="text"  value={this.state.p3} onChange={this.handlen3}/></td>
      <td><Input type="text"  value={this.state.q3} onChange={this.handlenq3} /></td>
      <td>  {this.state.t3}</td>
    </tr>

    <tr>
      <td>*</td>
      <td colSpan="3">Total</td>
      <td>{this.state.t}</td>
      </tr>
      <tr>

      <td>*</td>
      <td colSpan="2">SGST</td>
            <th>6 %</th>

      <td>{this.state.sgst}</td>
      </tr>
      <tr>

      <td>*</td>
      <td colSpan="2">CGST</td>
      <th>6 %</th>
      <td>{this.state.sgst}</td>
      </tr>
      <tr>

      <td>*</td>
      <td colSpan="3">Grand Total</td>
      <td>{this.state.total}</td>
      </tr>
  </tbody>
</Table>
                <h3>Thanks for Shopping</h3>   
                <Button  type="submit" onclick={()=> this.delete(this.ProductID1)} >Submit</Button>
                </Form>
          </div>
          
        )
    }
    }

export default Stockin;
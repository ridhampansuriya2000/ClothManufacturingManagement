
import React, { Component } from 'react'
import {Link} from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import axios from 'axios'	
import { Form, FormGroup, Label, Input,Col,Row,Table} from 'reactstrap';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Container
  } from 'reactstrap';
import { MDBRow, MDBCol, MDBBtn,MDBContainer, MDBInput} from "mdbreact";
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";
import jsPDF from 'jspdf';



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
            total:null,
             
      pesan:'',
      tinggi:11.69,
      lebar:'08.27',
      judul:'Lintang.pdf',
    BillNO:'',
    vendor:'',
    in:'',
    dataa:''


        }
      }

      
    componentDidMount(){
		this.getapiData1();
    this.getapiData2();
	}

	async getapiData1(){
		let resp=await axios.get('/Stockentry1')
		console.warn(resp.data.StockData)
		this.setState({data1:resp.data.StockData})
	}
  	async getapiData2(){
		let resp=await axios.get('/VendorRegistration')
		console.warn(resp.data.VendorData)
		this.setState({data2:resp.data.VendorData})
	}	
    changeHandler = (event) => {
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
  handlebill(event) {
    this.setState({
       BillID:event.target.value
        });
  }

  handleinvoice=event=>{
    this.setState({
    Invoice:event.target.value

    })
  }
  submitHandler=(event)=>{
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
    event.target.className += " was-validated";



  }

  unduhPdf(e){
    e.preventDefault();

    var doc = new jsPDF({
      
      unit: 'in',
     
      format: [this.state.tinggi, this.state.lebar]
    })/*
    doc.text(`PDF size: ${this.state.tinggi} x ${this.state.lebar} in`, 0.5, 0.5)
    doc.text(`PDF filename: ${this.state.judul}`, 0.5, 0.8)
    doc.text(`Bill Number: ${this.state.BillNO}`, 0.5, 1.1)
    doc.text(`Date : ${this.state.dataa}`, 0.5, 1.4)
    doc.text(`Invoice Number: ${this.state.in}`, 0.5, 1.7)
    doc.text(`Vendor Name: ${this.state.vendor}`, 0.5, 2.0)
    doc.text(`Grand Total: ${this.state.total}`, 0.5, 2.3)
    // format: (image_file, 'image_type', X_init, Y_init, X_fin, Y_fin)

    doc.save(`${this.state.judul}`)*/
    doc.text(`Shrinathaji fabrics`, 3, 0.8)
    doc.text(`Bill Number: ${this.state.BillID}`, 0.5, 1.1)
    doc.text(`Date : ${this.state.Dos}`, 0.5, 1.5)
    doc.text(`Invoice Number: ${this.state.Invoice}`, 0.5, 1.9)
    doc.text(`Vendor Name: ${this.state.VendorID}`, 0.5, 2.3)
    doc.text(`No`, 0.5, 2.7)
    doc.text(`Product`, 1.5, 2.7)
    doc.text(`Price`, 2.9, 2.7)
    doc.text(`Length`, 4, 2.7)
    doc.text(`Sub Total`, 5.6, 2.7)
    doc.text(`1`, 0.5, 3.2)
    doc.text(`${this.state.ProductID1}`, 1.6, 3.2)
    doc.text(` ${this.state.p1}`, 3, 3.2)
    doc.text(` ${this.state.q1}`, 4.2, 3.2)
    doc.text(` ${this.state.t1}`, 5.8, 3.2)

    doc.text(`2`, 0.5, 3.7)
    doc.text(`${this.state.ProductID2}`, 1.6, 3.7)
    doc.text(` ${this.state.p2}`, 3, 3.7)
    doc.text(` ${this.state.q2}`, 4.2, 3.7)
    doc.text(` ${this.state.t2}`, 5.8, 3.7)
    
    doc.text(`3`, 0.5, 4.2)
    doc.text(`${this.state.ProductID3}`, 1.6,4.2)
    doc.text(` ${this.state.p3}`, 3, 4.2)
    doc.text(` ${this.state.q3}`, 4.2, 4.2)
    doc.text(` ${this.state.t3}`, 5.8, 4.2)

    doc.text(`Total :`,4.2, 4.7)
    doc.text(`${this.state.t}`,5.9, 4.7)
    doc.text(`SGST(6%):`,4.2, 5.2)
    doc.text(`CGST(6%):`,4.2, 5.7)
    doc.text(`Grand Total:`,4.2, 6.2)

        
    doc.text(`${this.state.sgst}`,5.9,5.2)
    doc.text(`${this.state.sgst}`,5.9,5.7)
    doc.text(`${this.state.total}`,5.9,6.2)

    doc.text(`Thanks for Shoping`,3,6.9)
    doc.save(`${this.state.judul}`)
  };

render() {

    return (
       <div> 
            <h3 >Billing</h3>
             <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
              <br/>
    <MDBRow md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
                className="tab5"
              >
                Bill ID
              </label>
              {/*<input
                name="BillID"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="Bill ID"
                className="tab5"
                 onChange={(x)=>this.setState({BillID: x.target.value})}
                required
              />*/}
              <input
              name="BillID"
                defaultValue={("B-"+(Math.floor(Math.random()* 4444 + 1)))}
                type="text"
                 onChange={this.handlebill}
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="Bill ID"
                className="tab5"
                onChange={(x)=>this.setState({BillID: x.target.value})}
                required
              />
              <div className="invalid-feedback">
                Please provide a Bill ID.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBRow>
            <MDBRow md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"   
                className="tab5"
              >
                Date 
              </label>
              <input
                name="Dos"
                onChange={this.changeHandler}
                type="date"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                placeholder="Date"
                required
                className="tab6"
                onChange={(x)=>this.setState({Dos: x.target.value})}

              />
              <div className="invalid-feedback">
                Please provide a Valid Date.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBRow>
            
            <MDBRow md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
                className="tab5"

              >
               Invoice
              </label>
              {/*<input        
                name="Invoice"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                placeholder="Invoice Number"
                className="tab"
               onChange={(x)=>this.setState({Invoice: x.target.value})}

                required
              />*/}

<input 
                defaultValue={"I-"+(Math.floor(Math.random()* 4444 + 1))}
                name="Invoice"
                onChange={this.handleinvoice}
                type="text"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                placeholder="Invoice Number"
                className="tab"
               onChange={(x)=>this.setState({Invoice: x.target.value})}

                required
              />
              <div className="tab4" className="invalid-feedback">
                Please provide a Valid Invoice Number.
              </div>
            </MDBRow>
             
             <MDBRow md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
                className="tab5"
              >
                Vendor ID
              </label>
              <select className="tab" class="browser-default custom-select custom-select-lg mb-1" md="2" name="VendorID" onChange={this.changeHandler} onChange={(x)=>this.setState({VendorID: x.target.value})}
>
				            {this.state.data2.map((item)=>(<option key={item}  value={item.VendorID} >{item.VendorName}</option>))}
			        </select>
              <div className="invalid-feedback">
                Please provide a Employee.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBRow>
             
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
      <td>
      
      
      <select name="ProductID1" required onChange={this.changeHandler} >
				      {this.state.data1.map((item)=>(<option key={item}  value={item.ProductID} >{item.ProductType}</option>))}			
			    </select>
          
          
          </td>
      <td><Input type="text" required  value={this.state.p1} onChange={this.handlen1} /></td>
      <td><Input type="text" required value={this.state.q1} onChange={this.handlenq1} /></td>
      <td> {this.state.t1}</td>
    </tr>

    <tr>
      <td>2</td>
      <td><select name="ProductID2" onChange={this.changeHandler}>
				      {this.state.data1.map((item)=>(<option key={item}  value={item.ProductID} >{item.ProductType}</option>))}			
			    </select></td>
      <td><Input type="text"  required value={this.state.p2} onChange={this.handlen2} /></td>
      <td><Input type="text" required value={this.state.q2} onChange={this.handlenq2} /></td>
      <td>  {this.state.t2}</td>
    </tr>

      <tr>
      <td>3</td>
      <td><select name="ProductID3" onChange={this.changeHandler}>
				      {this.state.data1.map((item)=>(<option key={item}  value={item.ProductID} >{item.ProductType}</option>))}			
			    </select></td>
      <td><Input type="text" required value={this.state.p3} onChange={this.handlen3}/></td>
      <td><Input type="text" required value={this.state.q3} onChange={this.handlenq3} /></td>
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
 <center>
          <h3>Thanks for Shopping</h3>   
          <MDBBtn color="primary" type="submit">
            Generate Bill
          </MDBBtn>
      <br/>    
      <br/>
      <br/>
 
      <p style={{width:'100%'}}>Select PDF Size: &nbsp;
        <select ref="ukuran"
        onChange={(x)=>this.setState({
          tinggi: x.target.value[0]+x.target.value[1]+x.target.value[2]+x.target.value[3]+x.target.value[4],
          lebar: x.target.value[6]+x.target.value[7]+x.target.value[8]+x.target.value[9]+x.target.value[10]
        })}>
          <option value={[11.69,'08.27']}> A4 (210mm x 297mm) </option>
          <option value={[46.81,33.11]}> A0 (841mm x 1189mm) </option>
          <option value={[33.11,23.39]}> A1 (594mm x 841mm) </option>
          <option value={[23.39,16.54]}> A2 (420mm x 594mm) </option>
          <option value={[16.54,11.69]}> A3 (297mm x 420mm) </option>
          <option value={['08.27','05.83']}> A5 (148mm x 210mm) </option>
          <option value={['05.83','04.13']}> A6 (105mm x 148mm) </option>
          <option value={['04.13','02.91']}> A7 (74mm x 105mm) </option>
          <option value={['02.91','02.05']}> A8 (52mm x 74mm) </option>
          <option value={['02.05','01.46']}> A9 (37mm x 52mm) </option>
          <option value={['01.46','01.02']}> A10 (26mm x 37mm) </option>
        </select>
        </p>
</center>
     
          </form>
        <center>
        <MDBBtn color="primary"  onClick={this.unduhPdf.bind(this)}>
            Download PDF
          </MDBBtn> 
        
        </center>

      </div>      
    )
}
}
export default Stockin ;





/*
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
				            {this.state.data2.map((item)=>(<option key={item}  value={item.V_ID} >{item.V_name}</option>))}
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
				      {this.state.data1.map((item)=>(<option key={item}  value={item._id} >{item.p_type}</option>))}			
			    </select></td>
      <td><Input type="text"  value={this.state.p1} onChange={this.handlen1} /></td>
      <td><Input type="text"  value={this.state.q1} onChange={this.handlenq1} /></td>
      <td> {this.state.t1}</td>
    </tr>

    <tr>
      <td>2</td>
      <td><select name="ProductID2" onChange={this.handleInputChange}>
				      {this.state.data1.map((item)=>(<option key={item}  value={item.p_id} >{item.p_type}</option>))}			
			    </select></td>
      <td><Input type="text" value={this.state.p2} onChange={this.handlen2} /></td>
      <td><Input type="text"  value={this.state.q2} onChange={this.handlenq2} /></td>
      <td>  {this.state.t2}</td>
    </tr>

      <tr>
      <td>3</td>
      <td><select name="ProductID3" onChange={this.handleInputChange}>
				      {this.state.data1.map((item)=>(<option key={item}  value={item.p_id} >{item.p_type}</option>))}			
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
*/

/*import React, { Component } from 'react'
import {Link} from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import axios from 'axios'	
import { Form, FormGroup, Label, Input,Col,Row} from 'reactstrap';

class Stockin extends Component {
    constructor(props){
        super(props)
        this.state = {
            data1 : [],
            data2 : [],
            Products:[],
            Prices:[]
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
  
  addProduct(){
    this.setState({Products:[...this.state.Products,""]})

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
              
           <h3>Billing</h3>
                  			<label>Product Name</label>
                <select name="PID" onChange={this.handleInputChange}  >
		
				        {this.state.data1.map((item)=>(<option key={item}  value={item.PID} >{item.ProductType}</option>))}
			
			          </select>
                <br/>
                <br/>
                <label>Vendor Name</label>
                <select name="VendorID" onChange={this.handleInputChange}>
		
				        {this.state.data2.map((item)=>(<option key={item}  value={item.VendorID} >{item.VendorName}</option>))}
			
			          </select>
                <br/>

                <label>Product Name</label>
                              <label>Product Price</label>

              {
              this.state.Products.map((Product,index)=>{
                return(
                  <div key={index}>
                  <input value={Product}/>
                  </div>
                )
              })
              }
              
                             <button onClick={(e)=>this.addProduct(e)} >add Product</button>
     



                            
                <Button variant="primary" type="submit">
                     Submit
                </Button>
          </div>
          
        )
    }
    }

export default Stockin;*/

/*

 class Stockin extends Component {
    constructor(props){
        super(props)
        this.state = {
            data1 : [],
            data2 : [],
            Products:[]
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
  
  addProduct(){
    this.setState({Products:[...this.state.Products,""]})
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
              
           <h3>Billing</h3>
            <form onSubmit={this.submitHandler}>
                  			<label>Product Name</label>
                <select name="PID" onChange={this.handleInputChange}>
		
				        {this.state.data1.map((item)=>(<option key={item}  value={item.PID} >{item.ProductType}</option>))}
			
			          </select>
                <br/>
                <br/>
                <label>Vendor Name</label>
                <select name="VendorID" onChange={this.handleInputChange}>
		
				        {this.state.data2.map((item)=>(<option key={item}  value={item.VendorID} >{item.VendorName}</option>))}
			
			          </select>
                <br/>

                <label>Product Name</label>
              {
              this.state.Products.map((Product,index)=>{
                return(
                  <div key={index}>
                  <input value={Product}/>
                  </div>
                )
              })
              }


                <button onClick={(e)=>this.addProduct(e)} >add Product</button>
                <FormGroup className='l1'>
      <Row><Label >Selling ID</Label>
      <Col>	<Input
        type="text"
        name="SID"
        onChange={this.handleInputChange}
        /></Col></Row>
     </FormGroup>
     



                            
                <Button variant="primary" type="submit">
                     Submit
                </Button>
            </form>
          </div>
          
        )
    }
}
export default Stockin;*/


/*  componentDidMount(){
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
      async getapiData(){
		let resp=await axios.get('/VendorRegistration')
		console.warn(resp.data.VendorData)
		this.setState({data:resp.data.VendorData})
	}
    */
import React, { Component } from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from 'axios'
import { Form, FormGroup, Label, Input,Button,Col,Row} from 'reactstrap';
import Link from '@material-ui/core/Link'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import './s.css'


class salary extends Component {
  constructor(props){
      super(props)
      this.state = {
        salary:null,
        data:[]
      }
    }
    componentDidMount(){
      this.getapiData();
    }
  
      async getapiData(){
      let resp=await axios.get('/EmployeeRegistration')
      console.warn(resp.data.students)
      this.setState({data:resp.data.students})
    }

  submitHandler = event => {

              axios
                .put('/all')
                .then(response =>{
                    console.log(response)
            })
          };
      
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
      
        return (<div>
          <MDBBreadcrumb>
                <MDBBreadcrumbItem><Link color="inherit" href="/Home">Home</Link></MDBBreadcrumbItem>
                <MDBBreadcrumbItem > <Link color="inherit" href="/Reports">Reports</Link></MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>Salary</MDBBreadcrumbItem>
        
           </MDBBreadcrumb>
           <br/>
          <Form onSubmit={this.submitHandler}>
            
             <MDBTable color="theme.palette.primary.main" striped>
          <MDBTableHead>
             

   <tr>
      <th>Employee Name</th>
      <th>Salary</th>
     
      
    </tr>
      </MDBTableHead>
            
        

        <MDBTableBody>

{
  this.state.data.map(item=>{
    return(
    <tr>
        <th>
        {item.EmployeeName}
        </th>
        <th>
       {parseInt(item.E_count)*parseInt(item.E_price)}
        </th>
       
        
    </tr>
     
    )
  })
}
</MDBTableBody>

</MDBTable>
<br/><br/>
<MDBBtn color="primary" type="submit"  onSubmit={this.submit} className="h1" >
       Paid
     </MDBBtn>
          </Form>
        </div>
      )
  }
}
export default salary;

/*import React, { Component } from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from 'axios'
import { Form, FormGroup, Label, Input,Button,Col,Row} from 'reactstrap';
import Link from '@material-ui/core/Link'
export default class Salary extends Component {
  
         
    constructor(props){
        super(props)
        this.state = {
      
      EmployeeID: null
        }
      }
    handleSubmit = (event) => {
      event.preventDefault()
      console.log(this.state)
      axios
      .post('EmployeeRegistration/',this.state)
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
    const {EmployeeID}= this.state
   
            return (
              <div><MDBBreadcrumb>
              <MDBBreadcrumbItem><Link color="inherit" href="/Home">Home</Link></MDBBreadcrumbItem>
                 <MDBBreadcrumbItem > <Link color="inherit" href="/Reports">Reports</Link></MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Salary</MDBBreadcrumbItem>
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
                        EmployeeID
                      </label>
                      <input
                        name="EmployeeID"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="EmployeeID"
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

    */
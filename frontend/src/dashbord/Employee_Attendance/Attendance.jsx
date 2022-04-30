import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import { PropagateLoader } from 'react-spinners';
// Components
import Student from "./Student";


class Home extends Component {
  state = {
    data: null,
    allStudents: null,
    error: ""
  };

  async componentDidMount() {
    try {
      const students = await axios("/EmployeeRegistration");
      this.setState({ data: students.data});
    /*  axios.get('/EmployeeRegistration')
        .then((response) => {
          this.setState({data:response.data.EmployeeData})
        })*/
    } catch (err) {
      this.setState({ error: err.message });
    }
  }



  
  render() {
    let students;

    if (this.state.data)
      students =
        this.state.data.students &&
        this.state.data.students.map(student => (
          <Student key={student._id} {...student}  />
        ));
    else return <div className="Spinner-Wrapper"> <PropagateLoader color={'#333'} /> </div>;

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
     

    return (
      <div className="Table-Wrapper">
        <h1>Employee Attendance:</h1>
        <input
                name="Dos"
                onChange={this.changeHandler}
                type="date"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                placeholder="Date"
                required
                className="tab6"
                onChange={(x)=>this.setState({dataa: x.target.value})}/>
        <table className="Table">
          <thead>
            <tr>
              <th>EmployeeName</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{students}</tbody>
        </table>
      </div>
    );
  }
}

export default Home;
















/*import React, { Component } from 'react';
import ItemService from './ItemService';
import axios from 'axios';
import TableRow from './TableRow';


class Attendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: ''
        }
    }

    componentDidMount = () => {
        axios.get('/EmployeeRegistration')
        .then((response) => {
          this.setState({items:response.data.EmployeeData})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    tabRow = () => {
        if(this.state.items instanceof Array) {
            return this.state.items.map((object, i) => {
                return <TableRow obj={object} key={i} />
            })
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className='text-center'>MERN CRUD APPLICATION</h1>
                <br />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Item Id</td>
                            <td>Item Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Attendance;*/






/*

import React, { Component } from 'react'
import { Form, FormGroup, Label, Input,Button,Col,Row} from 'reactstrap';
import Table from 'react-bootstrap/Table'
import axios from 'axios'	


class Attendance extends Component{

	
  constructor(props){
    super(props)
    this.state = {
  data : [],
  E_id: null,
  E_name: null,
  E_gender: null,
  E_contact: null,
  E_mail: null,
  E_address: null,
  E_count:null,
  E_id:null 



    }
  }
handleSubmit = (event) => {
  event.preventDefault()
  console.log(this.state)
  axios
  .post('/EmployeeRegistration/ATTENDANCE',this.state)
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
  let resp=await axios.get('/EmployeeRegistration')
  console.warn(resp.data.EmployeeData)
  this.setState({data:resp.data.EmployeeData})
}



AddStudent = async id => {
  try {
    const studentRemoved = await axios.delete(`/api/students/${id}`);
    const students = await axios("/api/students/");
    this.setState({ data: students.data });
  } catch (err) {
    this.setState({ error: err.message });
  }
};



render () {

const {Status}= this.state


  return(
  
  <div className='b1'>
    

      <h1 className='title'>ATTENDANCE</h1>
      <Form>
        
      <Input className='sl11'
					type="Date"
					name="Date"
					
					/>


          

       <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Employee Name</th>
            <th>Attendance (P/A)</th>
          </tr>
        </thead>
        

          
            
       {this.state.data.map((item,i)=>(<tbody><tr><th>{i+1}</th><th key={item}  value={item.E_id} >{item.EmployeeName}</th><td> <Button className='sub' type="submit">ADD</Button></td></tr></tbody>))}

       
        
          
          
          </Table>  
          </Form> 
    </div>
  )

}
}
export default  Attendance;*/
/*
import React, { useState, useEffect }  from 'react'
import { Form, FormGroup, Label, Input,Button,Col,Row} from 'reactstrap';
import Table from 'react-bootstrap/Table'
import axios from 'axios'	
import { useHistory, useParams} from "react-router-dom";
import {produce} from'immer';

const Attendance = () => {
  let history = useHistory();
  const [users, setUser] = useState([]
  
  );
    
  useEffect(() => {
    fetch('/EmployeeRegistration1')
    .then(res=>res.json())
    .then(result=>{
      
      setUser(result )
    })
  }, []);

  const onInputChange = e => {
    setUser({ ...users, [e.target.name]: e.target.value });
    e.preventDefault();
  };

  const onSubmit = async e => {
   
    e.preventDefault();
    await axios.put(`/EmployeeRegistration`, users);
  };
 

  
  return (
    <div className='b1'>
    

      <h1 className='title'>ATTENDANCE</h1>
      <Form onSubmit={e => onSubmit(e)} >
        
      


      <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th>#</th>
            <th>Employee Name</th>
            <th>Attendance (P/A)</th>
            </tr>
          </thead>
          <tbody>
            { users.map((users, index) => (
             
              <tr>
                <th scope="row">{index + 1}</th>
                <th>{users.E_name}</th>
                <th>{<Input className='sl11'	type="text" name="E_count"  onChange={e => {const E_count=e.target.value; setUser(current=>produce(current,v=>{v[index].E_count=E_count}));axios.post(`/Attendance/${users._id}`, users);}	} ></Input>}</th>
              </tr>)
)}
          </tbody>
        </table>


          </Form> 
    </div>
  );
};

export default  Attendance;*/

/*
  const { E_id, E_name, E_gender, E_contact, E_mail ,E_address,E_count} = user;
  onst onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
componentDidMount(){
  this.getapiData()
}

async getapiData(){
  let resp=await axios.get('/EmployeeRegistration')
  console.warn(resp.data.EmployeeData)
  this.setState({data:resp.data.EmployeeData})
}
 <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}> Attendance</Link>
       <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Employee Name</th>
            <th>Attendance (P/A)</th>
          </tr>
        </thead>
        

          <tbody>
            
        {users.map((user, index) => (
              <tr>
                <th >{index + 1}</th>
                <td>{user.E_name}</td>
                <td><Input className='sl11'	type="text" name="E_count" value={(user.E_count)}	onChange={this.handleInputChange} ></Input></td>
              </tr>
              ))}
          </tbody>
          </Table>  


handleInputChange = (event) => {
    event.preventDefault()
    console.log(event)
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({
      [event.target.name]:event.target.value
    })
    event.preventDefault();

  fetch('/EmployeeRegistration/update', {
    method: 'put',
    headers: {
      'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
    },
    body: `_id=${this.state._id}&E_count=${this.state.E_count}`
  });
    
}

render () {

const {Status}= this.state


  return(
  
  <div className='b1'>
    

      <h1 className='title'>ATTENDANCE</h1>
      <Form onSubmit={this.updateUser.bind(this)}>
        
      <Input className='sl11'
					type="Date"
					name="Date"
					onChange={this.handleInputChange}
					/>


          

       <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Employee Name</th>
            <th>Attendance (P/A)</th>
          </tr>
        </thead>
        

          
            
       {this.state.data.map((item,i)=>(<tbody><tr><th>{i+1}</th><th key={item}  value={item.E_id} >{item.E_name}</th><td> <Input className='sl11'	type="text" name="E_count" value={(item.E_count)}	onChange={this.handleInputChange} ></Input></td></tr></tbody>))}

       <Button className='sub' type="submit">SUBMIT</Button>
        
          
          
          </Table>  
          </Form> 
    </div>
  )

}
}*/


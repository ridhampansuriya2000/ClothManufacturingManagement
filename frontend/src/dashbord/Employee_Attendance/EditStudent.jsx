import React, { Component } from "react";
import './EditStudent.css';
import axios from "axios";
import { withRouter } from 'react-router'
import {toast, ToastContainer} from "react-toastify";
import { Checkbox } from "semantic-ui-react";

class EditStudent extends Component {
  state = {
        id: '',
        EmployeeID:"",
        EmployeeName:'',
        EmployeeGender:"",
        EmployeeMobile:"",
        EmployeeEmail:"",
        EmployeeAddress:"",
        E_count:''
  
   
  };

  onChangeHandler = e => this.setState({ [e.target.name]: (parseInt(e.target.value)+1) });

  async componentDidMount() {
    try {
    let search =  this.props.location.search,
      id = search.substring(1, search.length);
    const updateStudent = await axios(`/EmployeeRegistration/${id}`);
    const { EmployeeID,E_count,EmployeeGender,EmployeeEmail,EmployeeMobile,EmployeeAddress,EmployeeName} = updateStudent.data.student;
    this.setState({ id,EmployeeID,E_count,EmployeeGender,EmployeeEmail,EmployeeMobile,EmployeeAddress,EmployeeName});
    } catch (err) {
      this.setState({ response: "Student not found!" })
    }
  };

  updateStudentHandler = async (e) => {
    e.preventDefault();
    try {
      const student = await axios.put(`/edit/${this.state.id}`, {
        EmployeeName: this.refs.EmployeeName.value,
        E_count:this.refs.E_count.value
        
      });
      toast("Attendance taken" ,{ type: toast.TYPE.INFO, autoClose: 3000 });

    } catch (err) {
      toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    if (this.state.response === "Student not found!")
      return <h1>Student not found!</h1>
    return (
      <div className="Edit-Student-Wrapper">
        <br/>
        <br/>
        <h1>Get Attendance</h1>
        <br/>
        <br/>
        <form onSubmit={this.updateStudentHandler}>
          <label htmlFor="name" className="t2">EmployeeName </label>
          <input
            type="text"
            placeholder="Name..."
            value={ this.state.EmployeeName}
            name="EmployeeName"
            onChange={this.onChangeHandler}
            ref="EmployeeName"
            required
            className="Edit-Student-Input"
            id="EmployeeName"
          />
<br/>
          
        <label htmlFor="name" className="t3" >Present</label>
        
        <input className="Edit-Student-Input"
        className="t1"
                type="radio"
                name="E_count"
                value={this.state.E_count}
                onChange={this.onChangeHandler}
                ref="E_count"
                id="E_count"
                required
                placeholder="Name..."
            ></input>

            <label htmlFor="name" className="t3">Absent</label>
                    <input className="Edit-Student-Input"
                        className="t1"
                type="radio"
                name="E_count"
                value={this.state.E_count}
      
                ref="E_count"
                id="E_count"
                required
                placeholder="Name..."
            ></input>
    
          <br/><br/>
          <button type="submit" className="Edit-Student-Submit fa fa-pencil"></button>
          <br/>
    
      
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(EditStudent);
/*
<label htmlFor="name">Attendance</label>
          <input
            type="text"
            placeholder="Name..."
            value={ this.state.E_count}
            name="E_count"
            onChange={this.onChangeHandler}
            ref="E_count"
            required
            className="Edit-Student-Input"
            id="E_count"
          /><br/>*/
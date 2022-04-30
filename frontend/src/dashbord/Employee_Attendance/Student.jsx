import React from 'react';
import './Student.css';
import { Link } from 'react-router-dom';



const Student = ({ _id, EmployeeName }) => {

  return(
    <tr>
      <td>{ EmployeeName}</td>
     
      <td>
       
        <Link to={{ pathname: '/edit', search: _id }}>
         <button className="Action-Button fa fa-pencil"></button>
        </Link>
      </td>

    </tr>
  );
};

export default Student;

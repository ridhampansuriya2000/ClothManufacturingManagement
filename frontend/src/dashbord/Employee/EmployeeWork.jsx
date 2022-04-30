import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


const EmployeeWork = (props) => {
    
    return (
        <Form>
        <FormGroup>
          <Label >Employee Registration </Label>
        </FormGroup>
  
  
        <FormGroup>
          <Label for="examplePassword">Employee ID</Label>
          <Input
            type="text"
            name="EID"
            id="EID"
          />
        </FormGroup>
  
        <FormGroup>
          <Label for="exampleEmail">Machine number </Label>
          <Input
            type="text"
            name="MachineNumber"
            id="MachineNumber"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">Product ID</Label>
          <Input
            type="text"
            name="ProductID"
            id="ProductID"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">Work(In Meter)</Label>
          <Input
            type="text"
            name="Work"
            id="Work"
          />
        </FormGroup>

        <FormGroup>
        <Label for="exampleDate">Work Date</Label>
        <Input
          type="date"
          name="WorkDate"
          id="WorkDate"
        />
      </FormGroup>
        <FormGroup>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </FormGroup>
        </Form>

    );

}

export default EmployeeWork;
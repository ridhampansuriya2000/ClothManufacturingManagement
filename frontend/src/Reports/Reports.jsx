import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Reports extends Component {
    render() {
        return (
            <div>
<div class="jumbotron text-center hoverable p-4">

<div class="row">

  <div class="col-md-4 offset-md-1 mx-3 my-3">

    <div class="view overlay">
    
      <a>
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

  </div>

  <div class="col-md-7 text-md-left ml-3 mt-3">

    <a  class="green-text">
      <h6 class="h6 pb-1"><i class="fas fa-layer-group"></i> Stock</h6>
    </a>

    <h4 class="h4 mb-4">Raw product Inquirey</h4>

    <p class="font-weight-normal">Get All information of your Stock in Warehouse by one click.</p>

    <a class="btn btn-success" href="/Stockin">Stock Inquirey</a>

  </div>
  <div class="col-md-4 offset-md-1 mx-3 my-3">

    <div class="view overlay">
    
      <a>
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

  </div>
<br/>
  

<div class="col-md-7 text-md-left ml-3 mt-3">

<a  class="green-text">
  <h6 class="h6 pb-1"><i class="fas fa-file-invoice"></i> Bill</h6>
</a>

<h4 class="h4 mb-4">Billing</h4>

<p class="font-weight-normal">Get All information of your Stock in Warehouse by one click.</p>

<a class="btn btn-success" href="/BillGenerate">Generate Bill</a>

</div>

<div class="col-md-4 offset-md-1 mx-3 my-3">

    <div class="view overlay">
    
      <a>
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

  </div>


<div class="col-md-7 text-md-left ml-3 mt-3">

<a  class="green-text">
  <h6 class="h6 pb-1"><i class="fas fa-dumpster"></i> Product</h6>
</a>

<h4 class="h4 mb-4">Product Inquirey</h4>

<p class="font-weight-normal">Get All information of your Stock in Warehouse by one click.</p>

<a class="btn btn-success" href="/Product">Product Inquirey</a>

</div>



<div class="col-md-4 offset-md-1 mx-3 my-3">

    <div class="view overlay">
    
      <a>
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>

  </div>

  <div class="col-md-7 text-md-left ml-3 mt-3">

    <a  class="green-text">
      <h6 class="h6 pb-1"><i class="fas fa-dollar-sign"></i> Salary portal</h6>
    </a>

    <h4 class="h4 mb-4">Salary Portal</h4>

    <p class="font-weight-normal">At the end of the month you can pay salary to your empolyee.</p>

    <a class="btn btn-success" href="/Salary">Salary</a>

  </div>
  <div class="col-md-4 offset-md-1 mx-3 my-3">

<div class="view overlay">

  <a>
    <div class="mask rgba-white-slight"></div>
  </a>
</div>

</div>

<div class="col-md-7 text-md-left ml-3 mt-3">

<a  class="green-text">
  <h6 class="h6 pb-1"><i class="fas fa-user-plus"></i> Post</h6>
</a>

<h4 class="h4 mb-4">Genrate Post</h4>

<p class="font-weight-normal">Here you can add new employee post.</p>

<a class="btn btn-success" href="/Post">Genrate Post</a>

</div>
</div>
</div>
</div>
        )
    }
}
export default Reports;



/*
<div class="col-md-7 text-md-left ml-3 mt-3">

    <a  class="green-text">
      <h6 class="h6 pb-1"><i class="fab fa-sellsy"></i> Sell</h6>
    </a>

    <h4 class="h4 mb-4">Selling Inquirey</h4>

    <p class="font-weight-normal">Information about your firm's selling </p>

    <a class="btn btn-success" href="/Sellingin">Selling Inquirey</a>

  </div>
  <div class="col-md-4 offset-md-1 mx-3 my-3">

<div class="view overlay">

  <a>
    <div class="mask rgba-white-slight"></div>
  </a>
</div>

</div>*/
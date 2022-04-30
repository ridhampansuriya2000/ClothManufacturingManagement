
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './details.css'
const Details = () => {
  return (
    <div>
    <br/>
    <br/>
    <MDBFooter stylish-color-dark  className="page-footer font-small lighten-6 pt-0">
      <div style={{ backgroundColor: "#21d192" }}>
        
      </div>
      <div style={{ backgroundColor: "#000000" }}>
      <br/>
      <MDBContainer className="mt-1 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol class="font1" md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
            <h6 class="font1" className="text-uppercase font-weight-bold">
              <strong className="font1">ItExpo Business Soluctions</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p className="font1">
            we provide best customized UI as well as Working Functionality.That is very important bost up to your business. Our Support team is avaliable 24x7.            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong className="font1">Products</strong>
            </h6>
            <hr className="rgba-white-light" style={{ width: "60px" }} />
            <p>
              <a href="#!" className="mb-0" className="font1">
                MDBootstrap
              </a>
            </p>
            <p>
              <a href="#!" className="font1">
                MDWordPress
              </a>
            </p>
            <p>
              <a href="#!" className="font1">
                BrandFlow
              </a>
            </p>
            <p>
              <a href="#!" className="font1">
                Bootstrap Angular
              </a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong className="font1">Useful links</strong>
            </h6>
            <hr className="font2" className=" accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "110px" }} />
            <p>
              <a href="#!" className="font1">
                Your Account
              </a>
            </p>
            <p>
              <a href="#!" className="font1">
                Become an Affiliate
              </a>
            </p>
            <p>
              <a href="#!" className="font1">
                Shipping Rates
              </a>
            </p>
            <p>
              <a href="#!" className="font1">
                Help
              </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong className="font1">Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "73px" }} />
            <p className="font1">
              <i  className="fa fa-home mr-3" /> Surat City ,Gujrat
            </p>
            <p className="font1">
              <i className="fa fa-envelope mr-3" /> info@itexponent.com
            </p>
            <p className="font1">
              <i className="fa fa-phone mr-3" /> + 91 95379 74420
            </p>
            <p className="font1">
              <i className="fa fa-print mr-3" /> + 91 878-0543653
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
      <div className="footer-copyright text-center py-3">
          
        &copy;{new Date().getFullYear()}- ItEponeint - All Rights Reserved ,

&copy; {new Date().getFullYear()} Copyright:{" "}
<a href="https://www.MDBootstrap.com"> ItExponenit.com </a>
        <MDBContainer fluid>
        </MDBContainer>
      </div>
    </MDBFooter>

    </div>
  );
}

export default Details;










/*import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Details = () => {
  return (
    <MDBFooter color="blue-grey"  className="page-footer font-small lighten-6 pt-0">
        <br/>
      <div style={{ backgroundColor: "#21d192" }}>
        <MDBContainer >
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="7" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
                Get connected with us on social networks!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a className="fb-ic ml-0">
                <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter white-text mr-lg-4"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
              </a>
              <a href="https://www.linkedin.com/in/kishan-bhingradiya-4659111ab/"className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
              </a>
              <a href="https://www.instagram.com/itexponenit.web/?hl=en" className="ins-ic">
                <i className="fab fa-instagram white-text mr-lg-4"> </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>ItExpo Business Soluctions</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "240px" }} />
            <p>
            we provide best customized UI as well as Working Functionality.That is very important bost up to your business. Our Support team is avaliable 24x7.            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Products</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "85px" }} />
            <p>
              <a href="#!" className="dark-grey-text">
                MDBootstrap
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                MDWordPress
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                BrandFlow
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Bootstrap Angular
              </a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "110px" }} />
            <p>
              <a href="#!" className="dark-grey-text">
                Your Account
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Become an Affiliate
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Shipping Rates
              </a>
            </p>
            <p>
              <a href="#!" className="dark-grey-text">
                Help
              </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "73px" }} />
            <p>
              <i className="fa fa-home mr-3" /> Surat City ,Gujrat
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@itexponent.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 91 95379 74420
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 91 878-0543653
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
          
        &copy;{new Date().getFullYear()}- ItEponeint - All Rights Reserved ,

&copy; {new Date().getFullYear()} Copyright:{" "}
<a href="https://www.MDBootstrap.com"> ItExponenit.com </a>
        <MDBContainer fluid>
        </MDBContainer>
      </div>
    </MDBFooter>

  );
}

export default Details;*/
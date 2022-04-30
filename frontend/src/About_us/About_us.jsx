import React from "react";
import { MDBJumbotron,MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";
import emailjs from 'emailjs-com';
function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_qd6kcam','template_a411qkw',e.target,'user_7hR3wb3ZI58R6kZuEbQau')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}

const About_us = () => {
  return (
    <MDBContainer className="mt-5 text-center">   
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>Contact Us</strong>
            </MDBCardTitle>

            
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
            Welcome to ItExponrnit
              </MDBCardTitle>
             
              

              <hr className="my-2" />

              <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol md="3" className="d-flex justify-content-around">
                  <a href="https://www.linkedin.com/in/kishan-bhingradiya-4659111ab/"><MDBIcon
                    fab
                    icon="linkedin-in"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href="https://twitter.com/?lang=en-in"><MDBIcon
                    fab
                    icon="twitter"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href="https://www.facebook.com/"><MDBIcon
                    fab
                    icon="facebook-f"
                    className="grey-text"
                    size="lg"
                  /></a>
                </MDBCol>
              </MDBCol>
              <br/>
              <div>
              <p className="lead">
            

            </p>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="user_name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="user_email"/>
                            <small id="emailHelp" className="form-text text-muted">
             
              </small></div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
    
  )
}
export default About_us;


/*import React from "react";
import { MDBJumbotron,MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";
import emailjs from 'emailjs-com';
function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_qd6kcam','template_a411qkw',e.target,'user_7hR3wb3ZI58R6kZuEbQau')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}

const About_us = () => {
  return (
    <MDBContainer className="mt-5 text-center">   
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>My adventure</strong>
            </MDBCardTitle>

            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
              className="img-fluid"
            />
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
            Welcome to ItExponrnit
              </MDBCardTitle>
              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </MDBCardText>
              

              <hr className="my-2" />

              <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol md="3" className="d-flex justify-content-around">
                  <a href="https://www.linkedin.com/in/kishan-bhingradiya-4659111ab/"><MDBIcon
                    fab
                    icon="linkedin-in"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href="https://twitter.com/?lang=en-in"><MDBIcon
                    fab
                    icon="twitter"
                    className="grey-text"
                    size="lg"
                  /></a>
                  <a href="https://www.facebook.com/"><MDBIcon
                    fab
                    icon="facebook-f"
                    className="grey-text"
                    size="lg"
                  /></a>
                </MDBCol>
              </MDBCol>
              <br/>
              <div>
              <p className="lead">
            <br/>

              <MDBBtn color="primary">Write Us</MDBBtn>
            </p>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="user_name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="user_email"/>
                            <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small></div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div><br/>
        &copy;{new Date().getFullYear()}- ItEponeint.com - All Rights Reserved        Powered By Google.com 
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
    
  )
}
export default About_us;*/
/*import React from 'react';
function About_us() { 
        return (
            <div>
                
            <h1>About Us.</h1>    
            <h2> We are noob Devloper </h2>
            <h2>WelCome to "ItExponenit"</h2>
            <h2>Devloper Team</h2>
            <ul>
                <li>Jay Bhingaradia</li>
                <li>Kishan Bhingradiya</li>
            </ul>
            &copy;{new Date().getFullYear()}- ItEponeint - All Rights Reserved 

            </div>
        );
<MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <h2 className="h1 display-3">Hello, Users!</h2>
            <h4 className="h3 display-5">Welcome to ItExponenIt</h4>

            <p className="lead">
              This is a simple hero unit, a simple Jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-2" />
            <p>
              Kishan Bhingradiya
            </p>
            <p>
            Jay bhingradia
                </p>
            &copy;{new Date().getFullYear()}- ItEponeint - All Rights Reserved 
            <br/>
            <p className="lead">
            <br/>

              <MDBBtn color="primary">Contect Us</MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
}
export default About_us;*/
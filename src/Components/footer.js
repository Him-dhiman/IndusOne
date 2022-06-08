import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
    const mystyle = {
        color: "white",
        border: "1px solid white",
        padding: "10px",
        fontFamily: "Arial"
      };
  return (
  
    <div>

    {/* <style>
        :: placeholder {{
            color: "red"
        }}
    </style> */}
       <footer className='.fixed-bottom'>
       <MDBFooter className='bg-dark text-center text-white'>
       <br></br>
        <h2>TechIndus One Services LLP</h2>
        <div>
 <hr></hr>
    <section class="">
      <form action="">
    
        <div className="row d-flex justify-content-center">
          <div className='col-auto' style={{color:"rgb(204, 51, 255)"}}>
            <p class="pt-2">
            <strong>Sign up for our newsletter : </strong>
              
            </p>
          </div>

          <div className='col-md-5 col-12'>
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" className="form-control" style={mystyle} placeholder="email"/>
            </div>
          </div>
          <div className='col-auto'>
          <button type="submit" class="btn btn-primary mb-4">
              Subscribe
            </button>

          </div>
  
        </div>

      </form>
    </section>

    <section class="mb-4">
      <p outline rounded className='mx-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </section>
   
  </div>
        <section>
        <MDBBtn outline rounded className='mx-2' color='secondary'>
        AI Connect
        </MDBBtn>
        <MDBBtn outline rounded className='mx-2' color='secondary'>
        IMS
        </MDBBtn>
        <MDBBtn outline rounded className='mx-2' color='secondary'>
        Our Projects
        </MDBBtn>
        </section>
      
        <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </a>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </a>
        </section>
      </MDBContainer>
    </MDBFooter>
       </footer>
       
    </div>
    
  );
}
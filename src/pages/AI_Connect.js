import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import Carousel from '../components/Carousel';
import CardItem from '../components/MDB_Cards';

function AI_Connect() {
  return (
      <>
      <div style={{padding :50}}>

      <MDBRow style={{padding :50}}>
        <MDBCol sm='8'>  <Carousel /></MDBCol>
        <MDBCol sm='4'><CardItem
        src="images/img-1.jpg"
        title="Learning content from more than 1000 companies in the form of challenges."
        content="Learn"
        /> </MDBCol>
        <MDBCol sm='3'><CardItem
        src="images/img-1.jpg"
        title="Learning content from more than 1000 companies in the form of challenges."
        content="Learn"
        /> </MDBCol>
        <MDBCol sm='3'><CardItem
          src="images/img-1.jpg"
          title="Learning content from more than 1000 companies in the form of challenges."
          content="Learn"
        /> </MDBCol>
        <MDBCol sm='3'><CardItem
        src="images/img-1.jpg"
        title="Learning content from more than 1000 companies in the form of challenges."
        content="Learn"
        /> </MDBCol>
      </MDBRow>
      </div>
      </>
  );
}

export default AI_Connect;

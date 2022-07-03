import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import Carousel from '../components/Carousel';
import CardItem from '../components/MDB_Cards';
import CardItem_2 from '../components/MDB_Cards_2';
import image1 from '../../../h-images/AI-1.png';
import image2 from '../../../h-images/AI-2.jpg';
import image3 from '../../../h-images/AI-3.png';
import image4 from '../../../h-images/AI_Connect.jpg';
function AI_Connect() {
  return (
      <>
      <div style={{padding :50}}>
      <h1> Welcome to AI Connect </h1>
      <MDBRow style={{}}>
      <MDBCol sm='8'>  <Carousel /></MDBCol>
      <MDBCol sm='4'><img  src={image4} style={{height: 415, width: 415}}/></MDBCol>
    </MDBRow>
      <MDBRow style={{padding :50}}>

        <MDBCol sm='3'><CardItem_2
        src={image2}
        title="Learning content from more than 1000 companies in the form of challenges."
        content="Learn"
        /> </MDBCol>
        <MDBCol sm='3'><CardItem_2
          src={image3}
          title="Learning content from more than 1000 companies in the form of challenges."
          content="Learn"
        /> </MDBCol>
        <MDBCol sm='3'><CardItem_2
        src={image2}
        title="Learning content from more than 1000 companies in the form of challenges."
        content="Learn"
        /> </MDBCol>
        <MDBCol sm='3'><CardItem_2
        src={image3}
        title="Learning content from more than 1000 companies in the form of challenges."
        content="Learn"
        /> </MDBCol>
      </MDBRow>
      </div>
      </>
  );
}

export default AI_Connect;

import React, { useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './app.css';

const Submissions = () => {
  
  const [post,setPost]=useState([]);

  const getSub = () =>{
    axios.get('/sub')
      .then((response)=>{
        const data = response.data;
        setPost({data});
        console.log('data received')
      })
      .catch(()=>{
        alert('error retreiving data!!!');
      });
  }

  useEffect(() => {
    getSub();
  }, []);
  

  const renderCard = (card,index)=>{
    return (
      <>
      <Card style={{ width: '18rem' }} key={index} className="box">
      <Card.Body>
      <Card.Subtitle className="mb-2 text-muted">{card.rstatus}</Card.Subtitle>
        <Card.Text>
          {card.usercode}
        </Card.Text>
        <Card.Link href="#">View</Card.Link>
      </Card.Body>
    </Card>
    </>
    );
  };
  return <div className="grid">{post.data?.map(renderCard)}</div>
};

export default Submissions;
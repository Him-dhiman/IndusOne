import React from 'react';
import axios from 'axios';


class App extends React.Component {

  state = {
    posts: []
  };

  componentDidMount = () => {
    this.getPost();
  };


  getPost = () => {
    axios.get('/sub')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });

      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }


  displayPost = (posts) => {

    if (!posts.length) return null;
    return posts.map((post, index) => (
      <div key={index}>
        <p>{post.usercode}</p>
      </div>
    ));
  };
  
  render() {

    //JSX
    return(
      <div>
        <h2>Welcome </h2>
        <div>
          {this.displayPost(this.state.posts)}
        </div>
      </div>
    );
  }
}


export default App;
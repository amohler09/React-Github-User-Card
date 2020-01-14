import React from 'react';
import './App.css';
import UserCard from './Components/UserCard';
import FollowersCard from './Components/FollowersCard';
import axios from 'axios';


class App extends React.Component {
  
    state = {
      user: []
    };

    componentDidMount() {
      axios
        .get('https://api.github.com/users/amohler09')
        .then(response => {
          this.setState ({
            user: response.data
          });
          //console.log(response.data);
        })
        .catch(error => console.log(error))
    }
  

  render() {
  return (
    <div className="App">
      <UserCard user={this.state.user}/>
      <FollowersCard />
    </div>
  );
  }
}

export default App;

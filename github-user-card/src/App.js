import React from 'react';
import './App.css';
import UserCard from './Components/UserCard';
import FollowersCard from './Components/FollowersCard';
import axios from 'axios';


class App extends React.Component {
  
    state = {
      user: [],
      followers: [],
      searchText: ''
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
    

    axios
      .get('https://api.github.com/users/amohler09/followers')
      .then(response => {
        this.setState ({
          followers: response.data
        })
        //console.log(response.data)
      })
      .catch(error => console.log(error))
      }

      handleChanges = event => {
        this.setState({
          searchText: event.target.value
        });
      };

      fetchUser = event => {
       // event.preventDefault(); --had to take out to make onClick work
        axios
          .get(`https://api.github.com/users/${this.state.searchText}`)
          .then(response => {
            this.setState({
              user: response.data
            })
          })
          }

        fetchFollowers = event => {
         // event.preventDefault(); --had to take out to make onClick work
          axios
            .get(`https://api.github.com/users/${this.state.searchText}/followers`)
            .then(response => {
              this.setState({
                followers: response.data
              })
            })
        }
        
        onClickEvent = () => {
          this.fetchUser();
          this.fetchFollowers();

        }


  render() {
  return (
    <div className="App">
      <input
      type='text'
      value={this.state.searchText}
      onChange={this.handleChanges}
      />
    {/* <button onClick={() =>
          {this.fetchUser(); this.fetchFollowers()}  
      }>Fetch User</button> */}
      <button onClick={this.onClickEvent}>Search</button>
      <UserCard user={this.state.user}/>
      <FollowersCard followers={this.state.followers} />
    </div>
  );
  }
}

export default App;

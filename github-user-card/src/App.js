import React from 'react';
import './App.css';
import UserCard from './Components/UserCard';
import FollowersCard from './Components/FollowersCard';
import axios from 'axios';
import styled from 'styled-components';

const Input = styled.input`
  margin: 5% 1% auto auto;
  width: 250px;
  height: 30px;
  background-color: lavender;
  font-size: 1rem;
  color: rebeccapurple;
`;

const FetchButton = styled.button`
  background-color: darkslateblue;
  color: white;
  font-size: 1rem;
  padding: .75%;
  font-weight: bold;
`;


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
              user: response.data,
              searchText: ''
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
      <Input
      type='text'
      value={this.state.searchText}
      onChange={this.handleChanges}
      />
    {/* <button onClick={() =>
          {this.fetchUser(); this.fetchFollowers()}  
      }>Fetch User</button> --- another way to combine two onClicks */}
      <FetchButton onClick={this.onClickEvent}>Fetch a Different User</FetchButton>
      <UserCard user={this.state.user}/>
      <FollowersCard user={this.state.user} followers={this.state.followers} />
    </div>
  );
  }
}

export default App;

import React from 'react';
import './App.css';
import UserCard from './Components/UserCard';
import FollowersCard from './Components/FollowersCard';

function App() {
  return (
    <div className="App">
      <UserCard />
      <FollowersCard />
    </div>
  );
}

export default App;

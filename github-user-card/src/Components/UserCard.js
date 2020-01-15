import React from 'react'
import styled from 'styled-components'

const UserCardDiv = styled.div`
    width: 30%;
    margin: auto;
    padding: 2%;
    margin-top: 2%;
    border-radius: 20px;
    background-color: indigo;
    box-shadow: -15px 15px 8px grey;
    color: white;
    font-weight: bold;

`;

const UserCard = props => {
    //console.log('These are the user props', props.user)
    return(
        <UserCardDiv>
            <h1>Github User {props.user.login}</h1>
                <img width='300' src={props.user.avatar_url} alt='user'></img>
                <p>{props.user.bio}</p>
                <p>Location: {props.user.location}</p>
                <p>Followers: {props.user.followers}</p>
                <p>Following: {props.user.following}</p>
        </UserCardDiv>

    )
}

export default UserCard;
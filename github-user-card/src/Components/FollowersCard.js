import React from 'react'
import styled from 'styled-components'

const FollowersCont = styled.div`
    width: 70%;
    border-radius: 20px;
    padding: 2%;
    margin: 5% auto;
    background-color: indigo;
    box-shadow: -15px 15px 8px grey;
`;

const FollowersDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    color: white;
    font-size: 1rem;
    font-weight: bold;
`;

const Followers = styled.div`
    padding: 2%;
    margin: auto;
    margin-top: 5%;
    width: 25%;
    border-radius: 10px;
    background-color: slateblue;
    box-shadow: -10px 10px 8px lavender;
`;

const Header = styled.h2`
    font-size: 2rem;
    color: lavender;
`;

const FollowersCard = props => {
    console.log(props.followers)
    return (
        <FollowersCont>
        <Header>{props.user.login}'s Followers:</Header>
        <FollowersDiv>
            {props.followers.map((item, index) => (
            <Followers key={index}>
                <img width='200' src={item.avatar_url} alt='followers' />
                <p>{item.login}</p>
                
                </Followers>
                
    ))}
        </FollowersDiv>
        </FollowersCont>

    )
}

export default FollowersCard;
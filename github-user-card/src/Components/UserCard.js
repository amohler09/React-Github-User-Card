import React from 'react'

const UserCard = props => {
    //console.log('These are the user props', props.user)
    return(
        <div>
            <h1>Github User {props.user.login}</h1>
                <img width='300' src={props.user.avatar_url} alt='user'></img>
                <p>{props.user.bio}</p>
                <p>Location: {props.user.location}</p>
                <p>Followers: {props.user.followers}</p>
                <p>Following: {props.user.following}</p>
        </div>

    )
}

export default UserCard;
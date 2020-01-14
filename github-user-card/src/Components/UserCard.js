import React from 'react'

const UserCard = props => {
    console.log('These are the user props', props.user)
    return(
        <div>
            <h1>Github User Card</h1>
                <img src={props.user.avatar_url} alt='user'></img>
                <p>Username: {props.user.login}</p>
                <p></p>

            
            
        </div>

    )
}

export default UserCard;
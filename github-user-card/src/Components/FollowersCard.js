import React from 'react'

const FollowersCard = props => {
    console.log(props.followers)
    return (
        <div>
            <h2>Followers:</h2>
            {props.followers.map((item, index) => (
            <div key={index}>
                <img width='200' src={item.avatar_url} alt='followers' />
                {item.login}
                
                </div>
                
    ))}
        </div>

    )
}

export default FollowersCard;
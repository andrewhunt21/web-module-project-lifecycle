import React from 'react';

class Follower extends React.Component {

    render() {
        return (
            <div>
                <h2>Followers:</h2>
                <img width="100" src={followers.avatar} />
                <p>{followers.login}</p>
            </div>
        )
    }
}

export default Follower;
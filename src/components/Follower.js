import React from 'react';

class Follower extends React.Component {

    render() {
        const { follow } = this.props;
        return (
            <div>
                <h2>Followers:</h2>
                <img width="100" src={follow.avatar_url} />
                <p>{follow.login}</p>
            </div>
        );
    }
}

export default Follower;
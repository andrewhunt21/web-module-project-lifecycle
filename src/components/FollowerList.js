import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {

    render() {
        return (
            <div>
                {this.props.listFollowers.map(followers => (
                    <Follower followers={followers} />
                ))}
            </div>
        )
    }
}

export default FollowerList;
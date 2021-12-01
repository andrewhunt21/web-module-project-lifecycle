import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {

    render() {
        return (
            <div>
                {this.props.followers.map(follow => (
                    <Follower follow={follow} />
                ))}
            </div>
        )
    }
}

export default FollowerList;
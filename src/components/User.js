import React from 'react';

class User extends React.Component {

    render() {
        return (
            <div>
                <img width="200" src={this.props.state.avatar} />
                <h2>{this.props.state.name}</h2>
                <p>{this.props.state.login}</p>
                <p>Total Repos: {this.props.state.repos}</p>
                <p>Total Followers: {this.props.state.totalFollowers}</p>
            </div>
        )
    }
}

export default User;
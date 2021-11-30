import axios from 'axios';
import React from 'react';

class App extends React.Component {
  state = {
    avatar: "",
    name: "",
    login: "",
    repos: "",
    totalFollowers: "",
    listFollowers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/andrewhunt21')
      .then(resp => {
        this.setState({
          ...this.state,
          avatar: resp.data.avatar_url,
          name: resp.data.name,
          login: resp.data.login,
          repos: resp.data.public_repos,
          totalFollowers: resp.data.followers,
          listFollowers: resp.data.followers_url
        });
      }).catch(err => {
        console.error(err);
      })
  }

  render() {
    return(
      <div>
        <h1>GitHub Info</h1>

        <form>
          <input />
          <button>Search</button>
        </form>

        <div>
          <img width="200" src={this.state.avatar} />
          <h2>{this.state.name}</h2>
          <p>{this.state.login}</p>
          <p>Total Repos: {this.state.repos}</p>
          <p>Total Followers: {this.state.totalFollowers}</p>
        </div>

        <div>
          <h2>Followers:</h2>
          <img />
          <p>usernames</p>
        </div>

      </div>);
  }
}

export default App;

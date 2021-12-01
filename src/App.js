import axios from 'axios';
import React from 'react';
import FollowerList from './components/FollowerList';
import User from './components/User';

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
          <User state={this.state} />
        </div>

        <div>
          <FollowerList followers={this.state.listFollowers} />
        </div>

      </div>);
  }
}

export default App;

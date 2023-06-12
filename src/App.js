import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchText: ''
    }
  }

  onSearchTextChange = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(
        this.state.searchText.toLowerCase()
      );
    })

    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox onChange={this.onSearchTextChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;

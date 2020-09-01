import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios'
import './App.css';
import Message from './components/Message';

const API = 'https://randomuser.me/api/?results=10';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
    }
  }

  componentDidMount() {
    axios.get(API)
      .then((res) => {
        this.setState( { userData: res.data.results });
      });
  }

  render() {
    const { userData } = this.state;
    return (
      <Router>
        <nav className="navigation">
          <ul className="navigation-list">
            <li className="navigation-link">
              <Link to="/home">
                Home
              </Link>
            </li>
            <li className="navigation-link">
              <Link to="/hello">
                Hello
              </Link>
            </li>
            <li className="navigation-link">
              <Link to="/signin">
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/home">
            <div className="App">
              {userData.map(({name, picture, location, id}) => {
                return (
                  <Message
                    name={`${name.first} ${name.last}`}
                    logo={picture.thumbnail}
                    title={location.country}
                    text={location.city}
                    key={id.value}
                  />
                );
              })}
            </div>
          </Route>
          <Route path="/hello">
            Привет!
          </Route>
          <Route path="/signin">
            Регистрация
          </Route>
        </Switch>
      </Router>
    );
 }


}

export default App;

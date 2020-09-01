import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Message from './components/Message';

function App() {
  const data = [
    { id: 1, name: 'Денис', logo, title: 'Заголовок', text: 'Hello World!!!' },
    { id: 2, name: 'Дима', logo, title: 'Заголовок Дмитрия', text: 'Hello World!!! от Димы' },
    { id: 3, name: 'Дане', logo, title: 'Заголовок Дане', text: 'Hello World!!! Данееее' }
  ];

  return (
    <Router>
      <nav className="navigation">
        <ul className="navigation-list">
          <li className="navigation-link">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="navigation-link">
            <Link to="/hello">
              Home
            </Link>
          </li>
          <li className="navigation-link">
            <Link to="/signin">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route patch="/" exact>
          <div className="App">
            {data.map(({name, logo, title, text, id}) => {
              return (
                <Message
                  name={name}
                  logo={logo}
                  title={title}
                  text={text}
                  key={id}
                />
              );
            })}
          </div>
        </Route>
        <Route path="/hello">
          Привет!
        </Route>
        <Route path="/signin">
          Я - регистратура!
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';

import {Button} from 'antd'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="tiles is-ancestor">
          <div className=" tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification is-primary">Guía de viaje para Paco con Bulma</article>
                <Button> sdfasds</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

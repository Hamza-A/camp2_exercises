import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from "underscore";

function Row(props) {
  return (
    <tr>
      <td>{props.products.decathlon_id}</td>
      <td>{props.products.title}</td>
      <td>{props.products.price}</td>
    </tr>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products
    }
  }

  handleClick = filter => {
  const sortedProducts = _.sortBy(this.state.products, filter)
  const reversedProducts = _.sortBy(this.state.products.reverse(), filter)
  this.setState({products: sortedProducts});
  this.setState({products: reversedProducts});
  }

    render() {
      return (
        <div>
          <table>
            <tr>
              <th onClick={() => this.handleClick('decathlon_id')}> ID </th>
              <th onClick={() => this.handleClick('title')}> TITLE </th>
              <th onClick={() => this.handleClick('price')}> PRICE </th>
            </tr>
            {this.state.products.map(p => <Row products={p}/>)}
          </table>
        </div>
      );
    }
  }

export default App;

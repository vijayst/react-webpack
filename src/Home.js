import React, { Component } from 'react';
import './home.scss';
import Trek from './trek.jpeg';
import { hot } from 'react-hot-loader/root'

class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1>Hello world!</h1>
                <img src={Trek} />
            </div>
        );
    }
}


export default hot(Home);
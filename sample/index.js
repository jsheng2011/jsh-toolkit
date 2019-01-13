import './stylesheet/app.scss';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

import Article from '../src/component/article/article.js';

// import Button from '../src/component/button/Button.js';

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            <Router>
                <div>
                    <Link to="/" >Home</Link>
                    <br/>
                    <Route path="/" exact component={() =>
                        <div>
                            <h1>This is HOME</h1>
                        </div>
                    }/>
                    <Link to="/article" >Article</Link>
                    <Route path="/article" component={() =>
                        <div>
                            <h1>this is toolkit</h1>
                            <Article>this is Article</Article>
                        </div>
                    }/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

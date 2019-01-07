import './stylesheet/app.scss';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {Article} from 'Component';

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
                    <Route path="/" exact component={() =>

                        <div>
                            <h1>this is toolkit</h1>
                            <Article>this is article</Article>
                        </div>

                    }/>
                    <Route path="/article" component={() =>
                        <div>
                            <h1>this is toolkit</h1>
                            <Article>this is article</Article>
                        </div>
                    }/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

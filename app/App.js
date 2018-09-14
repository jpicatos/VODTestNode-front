import React, {Component} from "react";
import { HashRouter as Router, Route, Link, Switch} from "react-router-dom";

import Menu from './components/Menu';
import Carrousel from './components/Carrousel';
import Video from './components/Video';
import History from './components/History';
import Login from './components/Login';
import Register from './components/Register';
import Doubts from './components/Doubts';

class App extends Component{
    constructor() {
        super();
        this.state = {
            url: 'http://localhost:3000',
            userName: ''
        };
    }
    render(){
        return (
            <Router>
                <div>
                    <Menu url={this.state.url} userName = {this.state.userName}/>
                    <Switch>
                        <Route exact path='/' render={(props) => (
                            <Carrousel {...props} url={this.state.url}/>
                        )}/>
                        <Route path="/video/:video" render={(props) => (
                            <Video {...props} url={this.state.url}/>
                        )}/>
                        <Route path='/login' render={(props) => (
                            <Login {...props} url={this.state.url}/>
                        )}/>
                        <Route path='/history' render={(props) => (
                            <History {...props} url={this.state.url}/>
                        )}/>
                        <Route path='/register' render={(props) => (
                            <Register {...props} url={this.state.url}/>
                        )}/>
                        <Route path='/doubts' render={(props) => (
                            <Doubts {...props} url={this.state.url}/>
                        )}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
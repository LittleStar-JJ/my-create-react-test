import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import App from '../components/App/App'
export default class AppContainer extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BrowserRouter>
                <Route exact path='/roster' component= {() => <App/>}/>
            </BrowserRouter>
        )
    }
}
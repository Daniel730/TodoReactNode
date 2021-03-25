import React  from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'
import Cadastro from '../cadastro/cadastro'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo}/>
        <Route path='/about' component={About}/>
        <Route path='/cadastro' component={Cadastro}/>
        <Redirect from='*' to="/todos"/>
    </Router>
)
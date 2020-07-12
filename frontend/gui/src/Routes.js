import React from "react"
import {Route} from 'react-router-dom'
import ArticleListView from './containers/ArticleListView'
import ArticleDetailView from './containers/ArticleDetailView'
import LoginView from './containers/LoginView'
import SignUpView from './containers/SignUpView'
// import ArticleCreateView from './containers/ArticleCreateView'
const Routes = () => {
    return (
    <div>
        <Route exact path='/' component={ArticleListView}/>
        <Route exact path='/articles/:articleID' component={ArticleDetailView}/>
        <Route exact path='/login' component={LoginView}/>
        <Route exact path='/signup' component={SignUpView}/>

        {/* <Route exact path='/create/' component={ArticleCreateView}/> */}
    </div>
    )
}

export default Routes
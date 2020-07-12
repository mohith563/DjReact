import React from "react"
import Article from '../components/Article'
// import ArticleCreateView from './ArticleCreateView'
import axios from 'axios'
import FormLayout from '../components/Form'

class ArticleListView extends React.Component{

    state = {
        articles : []
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/')
        .then(response => {
                this.setState({
                    articles: response.data
                })
            }
        )
    }

    render(){
        return(
            <div>
                {/* <ArticleCreateView /> */}
                <Article data = {this.state.articles}/>
                <br />
                <h2>Create an article</h2>
                <FormLayout 
                    requestType="post"
                    articleID={null}
                    btnText="Create"
                />
            </ div>
        )
    }
}

export default ArticleListView
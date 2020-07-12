import React from "react"
import axios from 'axios'
import { Card } from 'antd'
import FormLayout from '../components/Form'



class ArticleDetailView extends React.Component{

    state = {
        article : {}
    }

    componentDidMount(){
        const id = this.props.match.params.articleID
        console.log(id)
        axios.get(`http://127.0.0.1:8000/api/${id}`)
        .then(response => {
                this.setState({
                    article: response.data
                })
            }
        )
    }

    handleDelete = (event) => {
        // event.preventDefault()
        axios.delete(`http://127.0.0.1:8000/api/${this.props.match.params.articleID}`)
        .then(response => console.log(response))
        .catch(err => console.error(err))
    }

    render(){
        return(
            <div>
                <Card title={this.state.article.title} >
                    <i>{this.state.article.description}</i>
                    <p>
                        {this.state.article.content}
                    </p>
                </Card>
                <FormLayout 
                    requestType="put" 
                    articleID={this.props.match.params.articleID}
                    btnText="Update"
                />
                <form onSubmit={this.handleDelete}>
                    <button type="submit" >Delete</button>
                </form>
            </div>
        )
    }
}

export default ArticleDetailView
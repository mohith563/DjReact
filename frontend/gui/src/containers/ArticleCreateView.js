import React from 'react'
import axios from 'axios'

class ArticleCreateView extends React.Component{
    constructor(){
        super()
    }

    getCookie = name => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // axios.defaults.xsrfCookieName = 'csrftoken'
        // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        axios.post('http://127.0.0.1:8000/api/create/',this.state)
        .then(response => console.log(response))
        .catch(response => console.log(response))
        console.log(JSON.stringify(this.state))
        
		// const csrftoken = this.getCookie('csrftoken')
		// let url = 'http://127.0.0.1:8000/api/create/'

		// fetch(url,{
		// 	method:'POST',
		// 	headers:{
		// 		'Content-type':'application/json',
		// 		'X-CSRFToken':csrftoken
		// 	},
		// 	body:JSON.stringify(this.state)
		// })
		// .catch(error => console.log('Error:',error))
	}

    handleChange = (event) => {
		const { id,value } = event.target
        this.setState({[id]:value}
        )
	}

    state = {
        title:'',
        content:'',
        description:''
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <b><p>Title:       </p></b><input type="text" id="title" onChange={this.handleChange} value={this.state.title}/>
                <br />
                <b><p>Content:     </p></b><input type="text" id="content" onChange={this.handleChange} value={this.state.content}/>
                <br />
                <b><p>Description: </p></b><input type="text" id="description" onChange={this.handleChange} value={this.state.description}/>
                <br />
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}




export default ArticleCreateView
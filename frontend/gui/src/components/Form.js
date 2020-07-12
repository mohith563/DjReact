import React from 'react';
import { Form, Input, Button} from 'antd';
import axios from 'axios'

const handleFormSubmit = (event,requestType,articleID) => {
    event.preventDefault()
    const title = event.target.elements.title.value
    const content = event.target.elements.content.value
    const description = event.target.elements.description.value
    switch(requestType){
        case 'post':
            axios.post('http://127.0.0.1:8000/api/',{
                title:title,
                content:content,
                description:description
            })
            .then(response => console.log(response))
            .then(err => console.error(err))
            break
        case 'put':
            axios.put(`http://127.0.0.1:8000/api/${articleID}/`,{
                title:title,
                content:content,
                description:description
            })
            .then(response => console.log(response))
            .then(err => console.error(err))
            break
        default:
          break
    }
}

const FormLayout = (props) => {
  return (
    <div>
      <Form onSubmitCapture={(event) => handleFormSubmit(
          event,
          props.requestType,
          props.articleID
      )}>
        <Form.Item label="Form Layout" name="layout">
        </Form.Item>
        <Form.Item label="Title">
          <Input name="title" placeholder="Title" />
        </Form.Item>
        <Form.Item label="Description">
          <Input name="description" placeholder="Description" />
        </Form.Item>
        <Form.Item label="Content">
          <Input name="content" placeholder="Content" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" >{props.btnText}</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormLayout


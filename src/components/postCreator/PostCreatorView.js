import '../../styles/PostCreator.css';
import React, { Component } from 'react'
import { Header, Segment, Form, Image, Icon, } from 'semantic-ui-react';
import FormAPI from '../../util/FormAPI';
import {
  withRouter
} from 'react-router-dom';

const statusModifiers = [
  {key: 'f', value: 'feeling', text:'Feeling'},
  {key: 'w', value: 'watching', text:'Watching'},
  {key: 'p', value: 'playing', text:'Playing'},
  {key: 'l', value: 'listening_to', text:'Listening to'},
  {key: 'r', value: 'reading', text:'Reading'},
];

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      selectedFile: null,
      filePreviewURL: null,
      statusSubject: null,
      statusPredicate: null,
      postContent: null,
      toDashboard: false,
      // postTitle: null,
    };
  }

  // addStatusTuple = (obj) => {
  //   const newState = this.state.statusBlocksToSend;
  //   newState.push(obj);
  //   this.setState({statusBlocksToSend: newState});
  // }

  editFormContent = (attr, val) => {
    this.setState({[attr]: val});
  }

  submitForm = () => {
    const postData = new FormData();
    postData.set('ownerID', '5d23e214f57dfe06b0f561f8')
    postData.set('statusChunks', JSON.stringify({[this.state.statusPredicate]: this.state.statusSubject}))
    postData.set('postContent', this.state.postContent)
    postData.append('image', this.state.selectedFile)
    for (let ent of postData.entries()) {
      console.log(ent);
    }
    FormAPI({
      method: 'post',
      url: '/posts/content',
      headers: {'Content-Type': `multipart/form-data; boundary=${postData._boundary}`},
      data: postData
    }).then(res => {
      this.setState({loading: false});
      this.props.history.push('/')
      debugger;
    }).catch(err => {
      debugger;
    });
  }

  render() {
    return (
      <div className="post-creation-form">
        <Header as='h1'>G'Day!</Header>
        <Header as='h3'>Share your newest experiences by filling out the form below.</Header>
        <Segment size='huge'>
          <Form loading={this.state.loading}>
            <Segment size="big" className='form-container'>
              <Segment size="small" placeholder className="img-upload-segment" style={
                {maxHeight: '600px'}
              }>
                {
                  this.state.filePreviewURL ? <Image fluid centered src={this.state.filePreviewURL} 
                  className='img-upload-preview'/> : 
                  <Icon className='img-upload-placeholder-svg' size='huge' fitted name='file image outline'/>
                }
                  
                
              </Segment>
              <input type='file' id='img-upload-file-input' 
              onChange={(event, data) => {
                this.setState({filePreviewURL: URL.createObjectURL(event.target.files[0])});
                this.setState({selectedFile: event.target.files[0]});
              }}
              ref={input => this.selectedfile = input}/>
            </Segment>
            <Segment size='big'>
                {/* <Form.Input id='post-title' type='text' placeholder='Title'
                  onChange={e => this.editFormContent('postTitle', e.target.value)}></Form.Input> */}
                <Form.TextArea id='post-details' placeholder='Feel like sharing a bit more?'
                onChange={e => this.editFormContent('postContent', e.target.value)}></Form.TextArea>
                <Form.Group inline>
                  <Form.Dropdown id='status-predicate-0' options={statusModifiers} type='dropdown' 
                    label='What are you up to?'
                    onChange={(e, data) => {
                      this.setState({statusPredicate: data.value})}}></Form.Dropdown>
                  <Form.Input id='status-subject-0' type='text'
                    onChange={e => this.setState({statusSubject: e.target.value})}></Form.Input>
                </Form.Group>
            </Segment>
            <Form.Button className='btn-centered' onClick={e => {
              this.setState({loading: true});
              this.submitForm();
            }}>Submit</Form.Button>
          </Form>
        </Segment>
        
      </div>
    );
  }
}

export default withRouter(PostForm);
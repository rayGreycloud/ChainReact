import React, { Component } from 'react'
import { Modal, Divider, Button, Form, Dimmer, Loader, Label } from 'semantic-ui-react';
import actions from '../store/actions.js';
import store from '../store/store.js';
import { connect } from 'react-redux';
import API from '../util/API';

const mapStateToProps = function(store) {
  return {
    username: store.userInfo.username
  };
}
class LoginModal extends Component {
  state = {
    modalOpen: false,
    modalLoading: false, 
    username: this.props.username || null,
    password: null,
    errMsg: null,
  };

  toggleLoad = () => {this.setState({modalLoading: !this.state.modalLoading})}

  handleClose = () => {this.setState({modalOpen: false})}

  handleOpen = () => {this.setState({modalOpen: true})}

  setErrMsg = err => {this.setState({errorMsg: err})}

  setUsername = un => {this.setState({username: un})}

  setPass = pw =>{this.setState({password: pw})}

  render() {
    return (
        <Modal 
        open={this.state.modalOpen} 
        dimmer={'blurring'}
        onClose={this.handleClose}
        trigger={<Button inverted onClick={this.handleOpen}>Log In</Button>}closeIcon>
            <Modal.Header>We haven't seen you here before.</Modal.Header>
            <Modal.Content style={{paddingBottom: '8px'}}>
              <Dimmer active={this.state.modalLoading}>
                <Loader/>
              </Dimmer>
              {
                this.state.errorMsg && <Label basic color='red' pointing='below'>
                  {this.state.errorMsg}
                </Label>
              }
              <div>
                If you're ready to start sharing with the world, enter your log in information below and click <b>Log In</b>.
              </div>
              
              <Divider/>
              <Form className="user-information">
                <Form.Input
                  required
                  label="Username"
                  defaultValue={this.props.username}
                  onChange={(_, data) => this.setUsername(data.value)} 
                  style={{width: '80%'}}/> 
                <br/>
                <Form.Input placeholder="Password"
                  required
                  label="Password"
                  onChange={(_, data) => this.setPass(data.value)}
                  type="password" style={{width: '80%'}}/>
              </Form>
              <Divider/>
              <Modal.Actions>
                <Button 
                  disabled={!this.state.password || this.state.password.length < 6 || !this.state.username}
                  onClick={() => {
                    this.toggleLoad();
                    API.post('/users/auth', {
                        username: this.state.username,
                        pass: this.state.password
                    }).then(res => {
                      // successful request for token. Store in sessionStorage
                      sessionStorage.setItem('token', res.data.token)
                      this.toggleLoad();
                      this.setErrMsg(null);
                      this.handleClose();
                    }).catch(err => {
                      console.error(err);
                      this.setErrMsg('Please check your username and password and try again.');
                      this.toggleLoad();
                    })
                    store.dispatch(actions.logIn({username: this.state.username})); 
                    }} positive>Log In</Button>
                <Button basic color='black' onClick={this.handleClose} >Just Browse</Button>
              </Modal.Actions>
            </Modal.Content>
          </Modal>
    )
  }
}

export default connect(mapStateToProps)(LoginModal)

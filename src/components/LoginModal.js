import React, { Component } from 'react'
import { Modal, Divider, Button, Form } from 'semantic-ui-react';
import actions from '../store/actions.js';
import store from '../store/store.js';
import { connect } from 'react-redux';

const mapStateToProps = function(store) {
  return {
    username: store.userInfo.username
  };
}
class LoginModal extends Component {
  state = {modalOpen: false, username: null, pwLen: 0};

  handleClose = () => {this.setState({modalOpen: false})}

  handleOpen = () => {this.setState({modalOpen: true})}

  setUsername = un => {this.setState({username: un})}

  setPassLength = len =>{this.setState({pwLen: len})}

  render() {
    return (
        <Modal 
        open={this.state.modalOpen} 
        dimmer={'blurring'}
        onClose={this.handleClose}
        trigger={<Button inverted onClick={this.handleOpen}>Log In</Button>}closeIcon>
            <Modal.Header>We haven't seen you here before.</Modal.Header>
            <Modal.Content style={{paddingBottom: '8px'}}>
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
                  onChange={(_, data) => this.setPassLength(data.value.length)}
                  type="password" style={{width: '80%'}}/>
              </Form>
              <Divider/>
              <Modal.Actions>
                <Button 
                  disabled={this.state.pwLen < 6 || !this.state.username}
                  onClick={() => {
                    store.dispatch(actions.logIn({username: this.state.username})); 
                    this.handleClose();
                    }} positive>Log In</Button>
                <Button basic color='black' onClick={this.handleClose} >Just Browse</Button>
              </Modal.Actions>
            </Modal.Content>
          </Modal>
    )
  }
}

export default connect(mapStateToProps)(LoginModal)

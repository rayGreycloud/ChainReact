// import React, { useState } from 'react'

// import { Modal, Divider, Button, Form, Dimmer, Loader, Label } from 'semantic-ui-react';
// import actions from '../store/actions.js';
// import store from '../store/store.js';
// import { connect } from 'react-redux';
// import API from '../util/API';

// const mapStateToProps = function(store) {
//   return {
//     username: store.userInfo.username
//   };
// }

// const LoginModal = (props) => {
//     const [modalOpen, setModalOpen] = useState(false);
//     const [modalLoading, setModalLoading] = useState(false);
//     const [username, setUsername] = useState(props.username);
//     const [password, setPassword] = useState(null);
//     const [errMsg, setErrMsg] = useState(null);

//   const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

//     return (
//         <Modal
//         open={modalOpen}
//         dimmer={'blurring'}
//         onClose={setModalOpen(false)}
//         trigger={<Button inverted onClick={() => setModalOpen(true)}>Log In</Button>}closeIcon>
//             <Modal.Header>We haven't seen you here before.</Modal.Header>
//             <Modal.Content style={{paddingBottom: '8px'}}>
//               <Dimmer active={modalLoading}>
//                 <Loader/>
//               </Dimmer>
//               {
//                 errMsg && <Label basic color='red' pointing='below'>
//                   {errMsg}
//                 </Label>
//               }
//               <div>
//                 If you're ready to start sharing with the world, enter your log in information below and click <b>Log In</b>.
//               </div>

//               <Divider/>
//               <Form className="user-information">
//                 <Form.Input
//                   required
//                   label="Username"
//                   defaultValue={props.username}
//                   onChange={ event => setUsername(event.target.value)}
//                   style={{width: '80%'}}/>
//                 <br/>
//                 <Form.Input placeholder="Password"
//                   required
//                   label="Password"
//                   onChange={ event => setPassword(event.target.value)}
//                   type="password" style={{width: '80%'}}/>
//               </Form>
//               <Divider/>
//               <Modal.Actions>
//                 <Button
//                   disabled={!password || password.length < 6 || !username}
//                   onClick={() => {
//                     setModalLoading(true);
//                     API.post('/users/auth', {
//                         username: username,
//                         pass: password
//                     }).then(res => {
//                       // successful request for token. Store in sessionStorage
//                       sessionStorage.setItem('token', res.data.token)
//                       setModalLoading(false);
//                       setErrMsg(null);
//                       setModalOpen(false);
//                     }).catch(err => {
//                       console.error(err);
//                       setErrMsg('Please check your username and password and try again.');
//                       setModalLoading(false);
//                     })
//                     store.dispatch(actions.logIn({username: username}));
//                     }} positive>Log In</Button>
//                 <Button basic color='black' onClick={setModalOpen(false)} >Just Browse</Button>
//               </Modal.Actions>
//             </Modal.Content>
//           </Modal>
//     )
//   }

// export default connect(mapStateToProps)(LoginModal)

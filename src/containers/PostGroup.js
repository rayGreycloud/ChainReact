//TODO: Create a container for posts instead of shoving them in the dashboard view directly
import UserPost from '../components/UserPost';
import { ImageGroup } from 'semantic-ui-react';


import React, { Component } from 'react'

export default class PostGroup extends Component {
  render() {
    return (
      <div>
        <ImageGroup size="small" className="dashboard-view">
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
            </ImageGroup>
      </div>
    )
  }
}

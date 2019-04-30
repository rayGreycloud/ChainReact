import React, { Component } from 'react';
import PostGroupContainer from '../containers/PostGroupContainer';

export default class DashboardView extends Component {
  constructor(props) {
    super(props);
    const postGroups = props.postGroups;
    this.state = {
      postGroups: postGroups,
    }
  }
  render() {
    return (
        <div style={{width:'75vw', marginTop: '6em'}}>
          { 
            Object.keys(this.state.postGroups).map(pgName => {
              return <PostGroupContainer key={`${pgName}${this.state.postGroups[pgName].length}`} 
              title={pgName} 
              posts={this.state.postGroups[pgName]}
              />
            })
          }
      </div>
    )
  }
}

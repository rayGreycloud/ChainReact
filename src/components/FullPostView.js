import React, { Component } from 'react';
import { Segment, Image, Divider, Rating, Container, Placeholder, Header } from 'semantic-ui-react';
// import faker from 'faker';
import '../styles/FullPostView.css';

export default class FullPostView extends Component {

  listeningPresent() {
    return this.props.postInfo.details.action.predicate === "listening" && (
      <div>
        <Header floated="left" color="grey">Listening To: </Header>
      </div>
      );
  };

  feelingPresent() {
    return this.props.postInfo.details.action.predicate === "feeling" && (
      <div>
        <Header floated="left" color="grey">Feeling: </Header>
      </div>
    )
  }
  watchingPresent() {
    return this.props.postInfo.details.action.predicate === "watching" && (
      <div>
        <Header floated="left" color="grey">Watching: </Header>
        <p>{this.props.postInfo.details.action.subject}</p>
      </div>
    )
  }

  locationPresent() {
    return this.props.postInfo.details.location && (
      <div>
        <Header floated="left" color="grey">Location: </Header>
        <p>{this.props.postInfo.details.location}</p>
      </div>)
  };

  statusPresent() {
    return this.props.postInfo.details.status && (
      <div>
        <Header floated="left" color="grey">Status: </Header>
        <p>{this.props.postInfo.details.status}</p>
      </div>
    )
  };

  render() {
    return (
      <div className="full-post-body" style={{width: '90%', margin: 'auto', marginTop: '6em'}}>
        <Segment size="big">
            <Placeholder>
                <Placeholder.Header image>
                    <Placeholder.Line length="long" />
                    <Placeholder.Line length="medium"/>
                    <Placeholder.Line length="short"/>
                </Placeholder.Header>
            </Placeholder>
        </Segment>
        <Segment size="big">
            <Image centered={true} size="big" src={this.props.postInfo.img} />
            <Divider/>
            <Container textAlign="center">
                <Rating maxRating={10} defaultRating={this.props.postInfo.rating.positive} icon="star" size="huge" centered="true" />
            </Container>
            <Divider/>

            {this.listeningPresent()}
            {this.feelingPresent()}
            {this.locationPresent()}
            {this.statusPresent()}
            {this.watchingPresent()}
            
        </Segment>
      </div>
    )
  }
}

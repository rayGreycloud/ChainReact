import React, { Component } from 'react'
import {
  Segment,
  Image,
  Divider,
  Rating,
  Container,
  Placeholder,
  Header
} from 'semantic-ui-react'

import API, { baseURL } from '../util/API'
import '../styles/FullPostView.css'

export default class FullPostView extends Component {
  retrieveMeta(id) {
    return API.get(`/posts/content/${id}/meta`).then(res => res.data)
  }

  constructor(props) {
    super(props)
    this.state = {
      postInfo: {
        statusChunks: []
      }
    }
  }
  componentDidMount() {
    this.retrieveMeta(this.props.match.params.postID).then(res => {
      this.setState({
        postInfo: res
      })
    })
  }

  //TODO: refactor to something more elegant to one method per status chunk.
  listeningPresent() {
    const listenChunk = this.state.postInfo.statusChunks.filter(
      el => el.listening
    )

    return (
      listenChunk.length > 0 && (
        <div>
          <Header floated="left" color="grey">
            Listening to:{' '}
          </Header>
          <p>{listenChunk[0].listening}</p>
        </div>
      )
    )
  }

  playingPresent() {
    const playingChunk = this.state.postInfo.statusChunks.filter(
      el => el.playing
    )

    return (
      playingChunk.length > 0 && (
        <div>
          <Header floated="left" color="grey">
            Playing:{' '}
          </Header>
          <p>{playingChunk[0].playing}</p>
        </div>
      )
    )
  }

  feelingPresent() {
    const feelingChunk = this.state.postInfo.statusChunks.filter(
      el => el.feeling
    )

    return (
      feelingChunk.length > 0 && (
        <div>
          <Header floated="left" color="grey">
            Feeling:{' '}
          </Header>
          <p>{feelingChunk[0].feeling}</p>
        </div>
      )
    )
  }
  watchingPresent() {
    const watchingChunk = this.state.postInfo.statusChunks.filter(
      el => el.watching
    )

    return (
      watchingChunk.length > 0 && (
        <div>
          <Header floated="left" color="grey">
            Watching:{' '}
          </Header>
          <p>{watchingChunk[0].watching}</p>
        </div>
      )
    )
  }

  readingPresent() {
    const readingChunk = this.state.postInfo.statusChunks.filter(
      el => el.reading
    )

    return (
      readingChunk.length > 0 && (
        <div>
          <Header floated="left" color="grey">
            Reading:{' '}
          </Header>
          <p>{readingChunk[0].reading}</p>
        </div>
      )
    )
  }

  // locationPresent() {
  //   debugger;
  //   return this.state.postInfo.details.location && (
  //     <div>
  //       <Header floated="left" color="grey">Location: </Header>
  //       <p>{this.state.postInfo.details.location}</p>
  //     </div>)
  // };

  statusPresent() {
    return (
      this.state.postInfo.content && (
        <div>
          <Header floated="left" color="grey">
            Status:{' '}
          </Header>
          <p>{this.state.postInfo.content}</p>
        </div>
      )
    )
  }

  render() {
    return (
      <div
        className="full-post-body"
        style={{ width: '90%', margin: 'auto', marginTop: '6em' }}
      >
        <Segment size="big">
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line length="long" />
              <Placeholder.Line length="medium" />
              <Placeholder.Line length="short" />
            </Placeholder.Header>
          </Placeholder>
        </Segment>
        <Segment size="big">
          <Image
            centered={true}
            size="big"
            src={`${baseURL}/posts/content/${this.props.match.params.postID}`}
          />
          <Divider />
          <Container textAlign="center">
            <Rating
              maxRating={10}
              defaultRating={0}
              icon="star"
              size="huge"
              centered="true"
            />
          </Container>
          <Divider />

          {this.listeningPresent()}
          {this.feelingPresent()}
          {/* {this.locationPresent()} */}
          {this.statusPresent()}
          {this.watchingPresent()}
          {this.playingPresent()}
          {this.readingPresent()}
        </Segment>
      </div>
    )
  }
}

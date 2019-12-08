import React from 'react'
import '../../../styles/NavFooter.css'
import { Grid } from 'semantic-ui-react'

export default function NavFooter() {
  return (
    <div className="nav-footer">
      <Grid>
        <Grid.Row>
          <Grid.Column width={15}>
            <h1
              style={{
                fontVariant: 'small-caps',
                letterSpacing: '3px'
              }}
            >
              GFAM - conscious content
            </h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <a className="anchor-div" href="/how">
              How it works
            </a>
            <a className="anchor-div" href="/what">
              What we do
            </a>
            <div className="anchor-div">Internal nav</div>
            <div className="anchor-div">Internal nav</div>
          </Grid.Column>
          <Grid.Column width={3}>
            <div className="anchor-div">Legal nav</div>
            <div className="anchor-div">Legal nav</div>
            <div className="anchor-div">Legal nav</div>
          </Grid.Column>
          <Grid.Column width={3}>
            <div className="anchor-div">Language Selector</div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

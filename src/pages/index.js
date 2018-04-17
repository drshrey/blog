import React from 'react'
import Link from 'gatsby-link'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button';

import './index.css';

const IndexPage = () => (
  <div className="Root">
    <h4>Recent Posts </h4>
    <h4>What I'm Listening To</h4>
    <Card className="MusicListing">
        <CardMedia
          // image={WithoutWarningAlbumCover}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Without Warning
          </Typography>
          <Typography component="p">
            One of 21 Savage's best albums by far. Aside from the wonderful beats,
            we get to hear Shaaya's tragic history and how it fueled his passion
            for music.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Song-By-Song Analysis
          </Button>
        </CardActions>
      </Card>
    <h4>What I'm Reading</h4>
  </div>
)

export default IndexPage

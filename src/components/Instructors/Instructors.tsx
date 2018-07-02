import * as React from "react";
import { Segment, Grid, Header, Icon, Image } from "semantic-ui-react";
import { times } from "lodash";
var brandonimg = require("../../images/brandon.png");
var ericimg = require("../../images/eric.png");

interface InstructorProps extends React.HTMLProps<HTMLDivElement> {}

export default (props: InstructorProps) => {
  return (
    <Segment vertical className="stripe alternate feature">
      <Grid
        columns="3"
        textAlign="center"
        divided
        relaxed
        stackable
        className="container"
      >
        <Grid.Row>
          <Grid.Column>
            <Image src={brandonimg} />
          </Grid.Column>
          <Grid.Column>
            <Header>Brandon Mccaghren</Header>
            <p>
              Brandon Mccaghren earned his Brazilian Jiu Jitsu Black Belt under
              Eddie Bravo and was the first 10th Planet Instructor in the entire
              Southeastern United States. He has received each of his Jiu Jitsu
              ranks directly from Eddie Bravo. In addition to being an
              experienced teacher and Black belt in the Traditional Martial
              Arts, Brandon has staked his claim as one of the top grappling
              competitors in the Southeast by taking titles in Kakuto, Good
              Fight, IBJJF, NAGA, and even Freestyle Judo to name just a few. He
              has also led 10th Planet to multiple Team Titles at many of these
              same events.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header icon>Eric Ow</Header>
            <p>sdklfjsdf</p>
          </Grid.Column>
          <Grid.Column>
            <Image src={ericimg} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard" />
              Jacob Sandlin
            </Header>
          </Grid.Column>
          <Grid.Column>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              eaque at quae cupiditate aspernatur quibusdam! Distinctio quod
              non, harum dolorum earum molestias, beatae expedita aliquam
              dolorem asperiores nemo amet quaerat.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

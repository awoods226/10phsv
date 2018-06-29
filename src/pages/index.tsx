import * as React from "react";
import Link from "gatsby-link";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { menuItems } from "../layouts";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

export default (props: IndexPageProps) =>
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems} inverted
      />
      <Container text>
        <Header inverted as="h1">10th Planet Huntsville</Header>
        <Button className="blue" size="huge">Get started!</Button>
      </Container>
    </Segment>

    {/* Schedule */}
    <Segment vertical className="stripe schedule" textAlign="center">
      <Container>
        <Header inverted as="h1">Class Schedule</Header>
      </Container>
    </Segment>

    {/* Instructors */}
    <Segment vertical className="stripe alternate feature">
      <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              Brandon Mccaghren
            </Header>
            <p>
              Brandon Mccaghren earned his Brazilian Jiu Jitsu Black Belt under Eddie Bravo and was the first 10th Planet Instructor in the entire Southeastern United States. He has received each of his Jiu Jitsu ranks directly from Eddie Bravo. In addition to being an experienced teacher and Black belt in the Traditional Martial Arts, Brandon has staked his claim as one of the top grappling competitors in the Southeast by taking titles in Kakuto, Good Fight, IBJJF, NAGA, and even Freestyle Judo to name just a few. He has also led 10th Planet to multiple Team Titles at many of these same events.
                </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              Eric Ow
            </Header>
            <p>

            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
              Jacob Sandlin
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    {/* Map and directions */}
    <Segment vertical textAlign="center" className="stripe alternate feature">
      <Container>
        Map and directions
      </Container>
    </Segment>
  </div>;

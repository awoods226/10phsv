import * as React from "react";
import Link from "gatsby-link";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { menuItems } from "../layouts";
import { Button, Segment, Container, Header } from "semantic-ui-react";
import Instructors from "../components/Instructors/Instructors";
import LeadCapture from "../components/LeadCapture/LeadCapture";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

export default (props: IndexPageProps) => (
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link}
        pathname={props.location.pathname}
        items={menuItems}
        inverted
      />
      <Container text>
        <Header inverted as="h1">
          10th Planet Huntsville
        </Header>
        <Button className="blue" size="huge">
          Sign Up
        </Button>
        <Header inverted as="h2">
          JiuJitsu - Kickboxing - MMA
        </Header>
        <LeadCapture />
      </Container>
    </Segment>

    {/* Schedule */}
    <Segment vertical className="stripe schedule" textAlign="center">
      <Container>
        <Header inverted as="h1">
          Class Schedule
        </Header>
      </Container>
    </Segment>

    {/* Instructors */}
    <Instructors />
    {/* Map and directions */}
    <Segment vertical textAlign="center" className="stripe alternate feature">
      <Container>Map and directions</Container>
    </Segment>
  </div>
);

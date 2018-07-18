import * as React from "react";
import Link from "gatsby-link";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { menuItems } from "../layouts";
import { Button, Segment, Container, Header, Grid } from "semantic-ui-react";
import { SocialIcon } from "react-social-icons";
import Footer from "../components/Footer/Footer";
import Instructors from "../components/Instructors/Instructors";
import LeadCapture from "../components/LeadCapture/LeadCapture";
import Schedule from "../components/Schedule/Schedule";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

export default (props: IndexPageProps) => (
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      {/* <HeaderMenu
        Link={Link}
        pathname={props.location.pathname}
        items={menuItems}
        inverted
      /> */}
      <Container text>
        <Header inverted as="h1">
          <span className="hero10">10th Planet</span> Huntsville
        </Header>
        <Header inverted as="h2">
          JiuJitsu - Kickboxing - MMA
        </Header>
      </Container>
      <LeadCapture />
    </Segment>
    {/* Schedule */}
    <Segment vertical className="stripe schedule" textAlign="center">
      <Container>
        <Header inverted as="h3">
          Schedule
        </Header>
        <Schedule />
      </Container>
    </Segment>
    {/* Instructors */}
    <Instructors />
    {/* Map and directions */}
    <Segment vertical textAlign="center" className="stripe alternate feature">
      <Container>Map and directions</Container>
    </Segment>
    <Footer />
  </div>
);

import * as React from "react";
import { Button, Segment, Container, Header, Grid } from "semantic-ui-react";
export interface LeadCaptureProps {}

export default class LeadCapture extends React.Component<
  LeadCaptureProps,
  any
> {
  public render() {
    return (
      <div className="lead-capture">
        <Header inverted as="h3">
          Request more information
        </Header>
        <div
          className="lead-capture-form"
          id="leadcapture_1adfe833-41db-4c72-bf50-a6e27d5f822c"
        />
      </div>
    );
  }
}

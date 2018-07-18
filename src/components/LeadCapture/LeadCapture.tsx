import * as React from "react";
import { Header } from "semantic-ui-react";

interface LeadCaptureProps {}

const LeadCapture: React.SFC<LeadCaptureProps> = (props) => {
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
};

export default LeadCapture;

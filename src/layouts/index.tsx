import * as React from "react";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
interface DefaultLayoutProps {}

const DefaultLayout: React.SFC<DefaultLayoutProps> = (props) => {
  return <div>{props.children()}</div>;
};

export default DefaultLayout;

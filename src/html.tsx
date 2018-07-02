/* tslint:disable no-var-requires */
/* tslint:disable no-console */

import * as React from "react";
import Helmet from "react-helmet";

const config = require("../gatsby-config.js");

// Load production style
let styles: string;
if (process.env.NODE_ENV === `production`) {
  try {
    styles = require("!raw-loader!../public/styles.css");
  } catch (err) {
    console.log(err);
  }
}

interface HtmlProps {
  body: any;
  postBodyComponents: any;
  headComponents: any;
}

// Use `module.exports` to be compliante with `webpack-require` import method
module.exports = (props: HtmlProps) => {
  const head = Helmet.rewind();

  const css =
    process.env.NODE_ENV === `production` ? (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    ) : null;

  const verification =
    config.siteMetadata && config.siteMetadata.googleVerification ? (
      <meta
        name="google-site-verification"
        content={config.siteMetadata.googleVerification}
      />
    ) : null;
  return (
    <html lang="en">
      <head>
        {props.headComponents}
        <title>10th Planet Huntsville</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {css}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            !(function(a, b, c, d, e, f, g) {
              function h() {
                if (
                  void 0 !== a.zenplanner.directLoader &&
                  null !== window.zenplanner.directLoader
                ) {
                  clearInterval(j);
                  for (var b = 0, d = a.zenplanner.directLoadArgs.length; d > b; b++)
                    a.zenplanner.directLoadArgs[b].widgetInstanceId === g &&
                      a.zenplanner.directLoader.loadWidget(c, e, f, g);
                } else
                  i++ > 10 &&
                    (console.log("Zen Planner widget : " + e + ", failed to load."),
                    clearInterval(j));
              }
              (a.zenplanner = a.zenplanner || {}),
                (a.zenplanner.directLoadArgs = a.zenplanner.directLoadArgs || []);
              var i = 0,
                j = null;
              if (
                void 0 === a.zenplanner.directLoader ||
                null === a.zenplanner.directLoader
              ) {
                a.zenplanner.directLoadArgs.push({
                  module: e,
                  partitionApiKey: f,
                  widgetInstanceId: g
                });
                var k = b.createElement("script");
                (k.async = 1),
                  (k.src = c + "/" + d),
                  b.head.appendChild(k),
                  (j = setInterval(h, 1e3));
              } else a.zenplanner.directLoader.loadWidget(c, e, f, g);
            })(
              window,
              document,
              "https://studio.zenplanner.com",
              "zenplanner/studio/target/zp-widget-direct.js",
              "leadcapture",
              "80396d5d-37a6-4e39-b91c-2420624da9cd",
              "1adfe833-41db-4c72-bf50-a6e27d5f822c"
            );
        `
          }}
        />
        {verification}
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
};

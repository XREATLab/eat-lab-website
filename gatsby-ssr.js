/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require('react');
const { LanguageProvider } = require('./src/contexts/language-context');

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` });
  setHeadComponents([
    React.createElement("meta", {
      key: "google-site-verification",
      name: "google-site-verification",
      content: "cM-0sqdTxQMHH8VOpKY97GK-6zDc5NII43JTZo37PPo",
    }),
  ]);
};

exports.wrapRootElement = ({ element }) => {
  return React.createElement(LanguageProvider, null, element);
};

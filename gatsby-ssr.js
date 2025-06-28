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
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` });
};

exports.wrapRootElement = ({ element }) => {
  return React.createElement(LanguageProvider, null, element);
};

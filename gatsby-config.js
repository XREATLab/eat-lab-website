module.exports = {
  siteMetadata: {
    title: `E.A.T. Lab`,
    description: `Experiment, Art, Tech Lab`,
    author: `@xreatlab`,
    siteUrl: `https://xreatlab.pages.dev`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `E.A.T. Lab`,
        short_name: `E.A.T.Lab`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-postcss`,
  ],
}
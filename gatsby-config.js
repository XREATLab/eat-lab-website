module.exports = {
  siteMetadata: {
    title: `E.A.T. Lab - Dinegital XR Dining Experience`,
    description: `E.A.T. Lab creates innovative XR dining experiences like Dinegital, blending digital culture with immersive technology. Where Experiment meets Art meets Technology.`,
    author: `@xreatlab`,
    siteUrl: `https://xreatlab.pages.dev`,
    keywords: `E.A.T Lab, Dinegital, XR, Virtual Reality, Augmented Reality, Mixed Reality, Digital Dining, Immersive Experience, Art Technology, VR Dining, Interactive Restaurant, Future of Dining`
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        excludes: [`/404`],
        createLinkInHead: true,
      },
    },
    `gatsby-plugin-postcss`,
  ],
}
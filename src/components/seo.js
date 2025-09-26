import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description = '', lang = 'en', meta = [], title, keywords = '' }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const metaKeywords = keywords || site.siteMetadata.keywords

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaKeywords,
        },
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1`,
        },
        {
          name: `robots`,
          content: `index, follow`,
        },
        {
          name: `googlebot`,
          content: `index, follow`,
        },
        // Open Graph meta tags
        {
          property: `og:title`,
          content: title ? `${title} | ${defaultTitle}` : defaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:site_name`,
          content: defaultTitle,
        },
        {
          property: `og:locale`,
          content: lang === 'zh' ? 'zh_TW' : 'en_US',
        },
        // Twitter Card meta tags
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: title ? `${title} | ${defaultTitle}` : defaultTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        // Additional SEO meta tags
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          name: `theme-color`,
          content: `#000000`,
        },
      ].concat(meta)}
    />
  )
}

export default Seo
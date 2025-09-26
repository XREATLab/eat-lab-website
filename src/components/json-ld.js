import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const JsonLd = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  )

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "E.A.T. Lab",
    "alternateName": ["EAT Lab", "E.A.T Lab", "Dinegital"],
    "description": site.siteMetadata.description,
    "url": site.siteMetadata.siteUrl,
    "logo": `${site.siteMetadata.siteUrl}/icons/icon-512x512.png`,
    "sameAs": [
      "https://www.instagram.com/dinegital/",
      "https://www.youtube.com/channel/UCYijTe2ounpW6kHcMG7sESw"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TW",
      "addressLocality": "Taipei",
      "addressRegion": "Taiwan"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "xreatlab@gmail.com",
      "contactType": "customer service"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "Yen-Chun Lin"
      },
      {
        "@type": "Person", 
        "name": "Min-Feng Jiang"
      }
    ],
    "knowsAbout": [
      "Virtual Reality",
      "Augmented Reality", 
      "Mixed Reality",
      "XR Dining",
      "Digital Art",
      "Interactive Experience",
      "AI Art",
      "Sound Art",
      "3D Modeling",
      "Human-Computer Interaction"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "XR Art Experiences",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dinegital XR Dining Experience",
            "description": "Interactive dining experience mixing internet memes, emojis, and real food with XR technology"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "CreativeWork",
            "name": "The Secret of The World VR Experience",
            "description": "Award-winning VR project exploring mysterious virtual worlds and surreal spaces"
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default JsonLd

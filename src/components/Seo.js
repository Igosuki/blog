import React from 'react'
import { withPrefix } from 'gatsby'
import useSiteMetadata from './SiteMetadata'

const Seo = ({ title, description }) => {
  const defaults = useSiteMetadata()
  const seo = {
    title: title || defaults.title,
    description: description || defaults.description,
  }

  return (
    <>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${withPrefix('/')}img/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix('/')}img/favicon-32x32.png`}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix('/')}img/favicon-16x16.png`}
        sizes="16x16"
      />
      <link
        rel="mask-icon"
        href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
        color="#ff4400"
      />
      <meta name="theme-color" content="#fff" />
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content="/" />
      <meta
        property="og:image"
        content={`${withPrefix('/')}img/og-image.jpg`}
      />
    </>
  )
}

export default Seo

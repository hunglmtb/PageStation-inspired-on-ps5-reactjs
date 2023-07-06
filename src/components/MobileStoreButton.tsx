import React, { CSSProperties, HTMLAttributes } from 'react'

const imageLinks = {
  ios: 'https://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg',
  android: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg',
}
type LinkType = keyof typeof imageLinks

interface MobileStoreButtonProp extends HTMLAttributes<HTMLDivElement> {
  store: string
  url: string
  height?: number | string
  width?: number | string
  linkStyles?: CSSProperties
  linkProps?: any
}

const MobileStoreButton = ({ store, url, height = 75, width = 255, linkStyles, linkProps, ...props }: MobileStoreButtonProp) => {
  const urlLink = imageLinks[store as LinkType]
  const defaultLinkStyles = {
    background: urlLink ? `url(${urlLink}) no-repeat` : '',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    display: 'inline-block',
    overflow: 'hidden',
    textDecoration: 'none',
    height: '100%',
    width: '100%',
    padding: '5px',
    ...linkStyles,
  }

  return (
    <div style={{ height, width, display: 'inline-block' }} {...props}>
      <a style={defaultLinkStyles} href={url} target="_blank" rel="noopener noreferrer" {...linkProps}>
        {urlLink ? ` ` : store}
      </a>
    </div>
  )
}

export default MobileStoreButton

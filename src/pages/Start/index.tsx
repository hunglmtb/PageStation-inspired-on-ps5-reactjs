import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Particles from 'react-tsparticles'
import { ISourceOptions } from 'tsparticles'
import { isAndroid, isIOS } from 'react-device-detect'
import { useNavigate, useLocation } from 'react-router-dom'

import particlesOptions from '../../particles.json'
import MobileStoreButton from '../../components/MobileStoreButton'
import ReactplosiveModal from '../../components/ReactplosiveModal/index'

import './styles.css'
import a_cat from '../../images/a_cat.png'
import a_dog from '../../images/a_dog.png'
import logo from '../../images/logo.png'

const URLS = {
  prod: 'catvsdog://com.tbs.fleabagvsmutt',
  fallbackIosURL: 'https://apps.apple.com/',
  fallbackAndroidURL: 'https://play.google.com/store',
}

const Start: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [showDialogState, setShowDialogState] = useState(false)
  const [loading, setLoading] = useState(false)

  const path = useMemo(() => `${URLS.prod}${location.pathname}`, [location.pathname])
  useEffect(() => {
    if (isAndroid || !isIOS) {
      // Try to open the native app when the page is loaded
      // window.location.replace(URLS.prod)
      // Show popup confirmation
      setShowDialogState(true)
    }
  }, [])

  const handleAppRedirect = useCallback(() => {
    // Try to open the when user click in the "confirm" in popup
    setLoading(true)
    window.location.replace(path)
    if (isAndroid) {
      setTimeout(() => {
        // If the app is not installed,
        // then the user is redirect to the Play Store
        window.location.replace(URLS.fallbackAndroidURL)
        setLoading(false)
      }, 3000)
    } else if (isIOS) {
      setTimeout(() => {
        // If the app is not installed
        // then the user is reedirect to the App Store
        window.location.replace(URLS.fallbackIosURL)
        setLoading(false)
      }, 3000)
    }
  }, [path])
  return (
    <div className="container">
      <Particles options={particlesOptions as ISourceOptions} />
      <div className="start">
        <div className="circle1" />
        <div className="circle2" />
        <div className="icon" onClick={() => navigate('/', { replace: true })}>
          <img src={logo} alt="dog" className="avatar" />
        </div>
      </div>
      <div className="animationContainerStart">
        <div className="content">
          <div className="CatVsDogBanner">
            <img src={a_cat} alt="Cat" className="avatar" />
            <span className="simpleText CosmicTwo">Cat vs. Dog</span>
            <img src={a_dog} alt="dog" className="avatar" />
          </div>
          <h1 className="title CosmicTwo">
            Cat and Dog are at it again! It&apos;s a windy day and they are throwing stuff over the fence at each other until one of them gives up.
            Who&apos;s gonna be the winner on this windy day?
          </h1>
          <div className="storeContainer">
            <MobileStoreButton
              store="ios"
              height={'8vw'}
              width={'25vw'}
              url="https://apps.apple.com/us/app/pyno-chat-history-for-facebook/id1480323938"
              linkProps={{ title: 'Appstore' }}
              className="storeLink"
            />
            <MobileStoreButton
              store="android"
              height={'8vw'}
              width={'25vw'}
              url="https://apps.apple.com/us/app/pyno-chat-history-for-facebook/id1480323938"
              linkProps={{ title: 'Appstore' }}
              className="storeLink"
            />
          </div>
          <div className="tos CosmicTwo">
            <MobileStoreButton
              store="Privacy"
              height={'auto'}
              width={'50%'}
              url="/privacy.html"
              linkStyles={{ textAlign: 'right' }}
              className="storeLink"
            />
            <MobileStoreButton
              store="Term Service"
              height={'auto'}
              width={'50%'}
              url="/term-service.html"
              linkStyles={{ textAlign: 'left' }}
              className="storeLink"
            />
          </div>
        </div>
      </div>
      <ReactplosiveModal
        title={<h4 className="CosmicTwo">Launch Game ?</h4>}
        isVisible={showDialogState}
        onClose={() => {
          setLoading(false)
          setShowDialogState(false)
        }}
      >
        <p className="CosmicTwo">
          {`If the game is not installed on your phone, you may be redirect to ${
            isAndroid ? 'Play Store' : isIOS ? 'Appstore' : 'Play Store or Appstore'
          }`}
        </p>
        <br />
        <div className="actionButton">
          {loading ? (
            <div className="lds-ring">
              <div />
              <div />
              <div />
              <div />
            </div>
          ) : null}
          <button
            className="c-button CosmicTwo"
            onClick={() => {
              handleAppRedirect()
            }}
          >
            Launch
          </button>
        </div>
      </ReactplosiveModal>
    </div>
  )
}

export default Start

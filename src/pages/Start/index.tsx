import React from 'react'

import Particles from 'react-tsparticles'
import { ISourceOptions } from 'tsparticles'
import particlesOptions from '../../particles.json'

import './styles.css'
import a_cat from '../../images/a_cat.png'
import a_dog from '../../images/a_dog.png'
import MobileStoreButton from '../../components/MobileStoreButton'

const Start: React.FC = () => {
  return (
    <div className="container">
      <Particles options={particlesOptions as ISourceOptions} />
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
          <div className="start storeContainer">
            <MobileStoreButton
              store="ios"
              height={'15vw'}
              width={'25vw'}
              url="https://apps.apple.com/us/app/pyno-chat-history-for-facebook/id1480323938"
              linkProps={{ title: 'Appstore' }}
              className="storeLink"
            />
            <MobileStoreButton
              store="android"
              height={'15vw'}
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
              url="term-service.html"
              linkStyles={{ textAlign: 'left' }}
              className="storeLink"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Start

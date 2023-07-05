/* eslint-disable  @typescript-eslint/explicit-function-return-type */
import React, { useCallback, useEffect } from 'react'
import { FiHeart, FiHome } from 'react-icons/fi'

import Particles from 'react-tsparticles'
import { ISourceOptions } from 'tsparticles'
import { useNavigate } from 'react-router-dom'
import particlesOptions from '../../particles.json'

import './styles.css'

import game from '../../images/game.png'

const Users: React.FC = () => {
  const navigate = useNavigate()
  const handleNavigateStart = () => navigate(`/`, { replace: true })

  const handleUserKeyPress = useCallback(
    (event: any) => {
      const { keyCode } = event

      if (keyCode === 32 || keyCode === 13) {
        navigate(`/home`, { replace: true })
      }
      if (keyCode === 8 || keyCode === 27) {
        navigate(-1)
      }
    },
    [navigate],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress)

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress)
    }
  }, [handleUserKeyPress])

  return (
    <div className="container-shutdown">
      <Particles options={particlesOptions as ISourceOptions} />

      <div className="animationContainerShutdown">
        <div className="content-shutdown">
          <div className="content-info">
            <h1>Putting your PageStation into rest mode...</h1>
            <h2>Don&lsquo;t unplug the AC power cord when the power indicator on your PageStation is lit or blinking</h2>
            <div className="home">
              <span className="fan">
                Made with <FiHeart /> by a fan
              </span>
              <button type="button" onClick={handleNavigateStart}>
                <FiHome />
              </button>
            </div>
          </div>
          <div className="featured-image">
            <div className="featured-image-shadow" />

            <img src={game} alt="Game" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users

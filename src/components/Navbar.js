/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import colors from '../utilities/cssVariables'
import React, { useEffect, useState } from 'react'

function Navbar() {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }
    })
  }, [])

  return (
    <div
      css={css`
        position: fixed;
        width: 100%;
        z-index: 1;
        padding: 1rem;
        height: 80px;
        background: ${showNav && colors.primaryColor};
        opacity: 0.8;

        span {
          color: ${colors.secondaryColor};
        }
      `}
    >
      <h3>
        movie<span>Gallery</span>
      </h3>
    </div>
  )
}

export default Navbar

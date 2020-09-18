/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core'
import React from 'react'
import colors from '../../utilities/cssVariables'

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html,
        body {
          font-family: 'Raleway', sans-serif;
          line-height: 1.4;
          font-size: 1.1rem;
          background: ${colors.primaryColor};
          color: ${colors.lightColor};
        }

        img {
          object-fit: contain;
          width: 100%;
        }
      `}
    />
    <main>{children}</main>
  </>
)

export default Layout

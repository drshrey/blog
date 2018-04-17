import React from 'react'
import Link from 'gatsby-link'

import './index.css';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'darkblue',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: 'auto',
        textAlign: 'center',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>        
      </h2>
    </div>
    <div className="NavbarLinks">
      <span className="NavbarLink" onClick={() => window.location.href='/about/me'}>about.</span>  
      <span className="NavbarLink" onClick={() => window.location.href='/eli5/ml'}>eli5 for ml papers.</span>
      <span className="NavbarLink" onClick={() => window.location.href='/cooking'}>cooking.</span>
      {/* <span className="NavbarLink" onClick={() => window.location.href='/books/reports'}>book reports.</span> */}
      <span className="NavbarLink" onClick={() => window.location.href='/about/work'}>what i'm working on.</span>    
      <span className="NavbarLink" onClick={() => window.location.href='/about/contact'}>contact.</span>    
    </div>    
  </div>
)

export default Header

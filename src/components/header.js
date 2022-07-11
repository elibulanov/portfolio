import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "react-scroll"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      maxWidth: `850px`
    }}
  >
    <Link
      to='/'
      spy={true}
      smooth={true}
      duration={600}
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <Link to="projects" spy={true} smooth={true} offset={150} duration={700}>
          Test 1
    </Link>
        
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import './footer.component.css'

import React from 'react'

class Footer extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="dev-info">
        <div className="marquee">
          <span>Have a business to expand? Contact our website &nbsp;
            <a target="_blank"
               href="https://www.linkedin.com/in/tanmayawasthi105/"
               rel="noreferrer">Developer</a>.
          </span>
        </div>
      </div>
    )
  }
}

export default Footer;
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebook, faLinkedin, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas, faXTwitter, faFacebook, faLinkedin)


function Footer() {
  return (
    <div>
    <div className="container-fluid main-footer">
      <div className="row footer">
        <div className="col-md-4 ">
          <h6>About US</h6>
          <ul className='foot'>
                          <li>About StuSave</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h6>Policies</h6>
          <ul className='foot'>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h6>Customer Service</h6>
          <ul className='foot'>
            <li>FAQs</li>
            <li>ALERTS</li>
          </ul>
        </div>
      </div>
      <div>
                  <div className='brands'>
                  <div className='tech-brands'><FontAwesomeIcon icon="fa-brands fa-x-twitter" bounce size="2xl" /></div>
                          <div className='tech-brands'><FontAwesomeIcon icon="fa-brands fa-facebook" bounce size="2xl" /></div>
                          <div className='tech-brands'><FontAwesomeIcon icon="fa-brands fa-linkedin"  bounce size="2xl" /></div>
        </div>
        <p className="text-center" style={{ fontWeight: 'bold'}}>&copy; 2023 StuSave ||| (UK) Ltd. All Rights Reserved.</p>
      </div>
    </div>
  </div>
  )
}

export default Footer
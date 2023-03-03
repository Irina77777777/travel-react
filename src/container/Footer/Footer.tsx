
import './Footer.scss'

type Props = {}
const Footer = (props: Props) => {
  return (
      <div className="footer">
          <div>
              <h4>TAGS</h4>
              <div className="tag">
                  <div className="tags"> Asia </div>
                  <div className="tags"> Dubai </div>
                  <div className="tags"> Africa</div>
                  <div className="tags"> Egypt</div>
                  <div className="tags"> Europe</div>
                  <div className="tags"> Video</div>
                  <div className="tags"> Germany</div>
              </div>
          </div>
          <div className='dest'>
              <h4> DESTINATIONS</h4>
              <ul>
                  <li> Asia </li>
                  <li> Africa </li>
                  <li> Europe </li>
              </ul>
          </div>
          <div className="line"></div>
          <p> © Copyright 2023, All Rights Reserved</p>
      </div>
  )
}
export default Footer
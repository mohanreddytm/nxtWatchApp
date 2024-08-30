import { Component } from "react";

import { Link, withRouter } from "react-router-dom";

import { TiHome } from "react-icons/ti";

import { FaFire, FaGamepad } from "react-icons/fa";
import { HiSaveAs } from "react-icons/hi";

import AccessOfAllStateOne from "../../complexOne/AccessOfAllStateOne";

import {
  MainLeftCont,
  IconCont,
  MainHeadings,
  LowerLeftCont,
} from "../Home/styledOne";

class LeftContainer extends Component {
  render() {
    return (
      <AccessOfAllStateOne.Consumer>
        {(value) => {
          const { isLight } = value;
          const { match } = this.props;
          const { path } = match;

          const first = path === "/" ? true : false;
          const second = path === "/trending" ? true : false;

          const third = path === "/gaming" ? true : false;
          const fourth = path === "/saved-videos" ? true : false;

          return (
            <MainLeftCont isLight={isLight}>
              <ul className="home-left-top-cont">
                <Link to="/" className="link-normal">
                  <IconCont one={first} isLight={isLight}>
                    <TiHome one={first} className="home-left-top-logos" />
                    <MainHeadings one={first} isLight={isLight}>
                      Home
                    </MainHeadings>
                  </IconCont>
                </Link>
                <Link to="/trending" className="link-normal">
                  <IconCont one={second} isLight={isLight}>
                    <FaFire one={second} className="home-left-top-logos" />
                    <MainHeadings one={second} isLight={isLight}>
                      Trending
                    </MainHeadings>
                  </IconCont>
                </Link>
                <Link to="/gaming" className="link-normal">
                  <IconCont one={third} isLight={isLight}>
                    <FaGamepad one={third} className="home-left-top-logos" />
                    <MainHeadings one={third} isLight={isLight}>
                      Gaming
                    </MainHeadings>
                  </IconCont>
                </Link>
                <Link to="/saved-videos" className="link-normal">
                  <IconCont one={fourth} isLight={isLight}>
                    <HiSaveAs one={fourth} className="home-left-top-logos" />
                    <MainHeadings one={fourth} isLight={isLight}>
                      Saved videos
                    </MainHeadings>
                  </IconCont>
                </Link>
              </ul>
              <LowerLeftCont isLight={isLight}>
                <h1 className="home-left-bottom-heading">CONTACT US</h1>

                <ul className="contact-images-cont">
                  <li className="images-in-contact">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                      className="contact-logos"
                    />
                  </li>
                  <li className="images-in-contact">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                      alt="twitter logo"
                      className="contact-logos"
                    />
                  </li>
                  <li className="images-in-contact">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                      className="contact-logos"
                    />
                  </li>
                </ul>
                <p className="home-left-bottom-desc">
                  Enjoy! Now to see your channels and recommendations!
                </p>
              </LowerLeftCont>
            </MainLeftCont>
          );
        }}
      </AccessOfAllStateOne.Consumer>
    );
  }
}

export default withRouter(LeftContainer);

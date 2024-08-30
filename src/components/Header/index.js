import { Component } from "react";

import { withRouter, Link } from "react-router-dom";

import Cookies from "js-cookie";

import Popup from "reactjs-popup";

import { IoIosLogOut } from "react-icons/io";

import "reactjs-popup/dist/index.css";

import { FaAdjust, FaRegLightbulb } from "react-icons/fa";

import AccessOfAllStateOne from "../../complexOne/AccessOfAllStateOne";

import {
  MainContainer,
  LogoutButton,
  PopupContainer,
  PopupHeading,
} from "./styledOne";

import "./index.css";

class Header extends Component {
  onClickLogoutButton = () => {
    Cookies.remove("jwt_token");
    const { history } = this.props;
    history.replace("/login");
  };

  render() {
    return (
      <AccessOfAllStateOne.Consumer>
        {(value) => {
          const { isLight, onChangeTheme } = value;

          const onClickThemeOne = () => {
            onChangeTheme();
          };
          const imageSrc = isLight
            ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png";

          const themeIcon = isLight ? (
            <FaAdjust className="theme-change-button" />
          ) : (
            <FaRegLightbulb className="theme-change-button light-theme" />
          );
          return (
            <MainContainer isLight={isLight}>
              <Link to="/" className="link-normal">
                <img
                  className="header-logo"
                  src={imageSrc}
                  alt="website logo"
                />
              </Link>

              <ul className="headers-right-cont">
                <li className="every-item-headers" onClick={onClickThemeOne}>
                  {themeIcon}
                </li>
                <li className="every-item-headers">
                  <img
                    className="right-header-images"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </li>
                <li id="checking" className="every-item-headers">
                  <Popup
                    modal
                    trigger={
                      <LogoutButton
                        id="checkingTwo"
                        isLight={isLight}
                        type="button"
                      >
                        <IoIosLogOut className="main-img" />
                        <p className="logout-button-text">Logout</p>
                      </LogoutButton>
                    }
                    className="popup-content"
                  >
                    {(close) => (
                      <PopupContainer isLight={isLight}>
                        <PopupHeading isLight={isLight}>
                          Are you sure you want to logout?
                        </PopupHeading>
                        <div className="buttons-cont">
                          <button
                            onClick={() => close()}
                            className="cancel-button"
                            type="button"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={this.onClickLogoutButton}
                            className="confirm-button"
                            type="button"
                          >
                            Confirm
                          </button>
                        </div>
                      </PopupContainer>
                    )}
                  </Popup>
                </li>
              </ul>
            </MainContainer>
          );
        }}
      </AccessOfAllStateOne.Consumer>
    );
  }
}

export default withRouter(Header);

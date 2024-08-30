import { Component } from "react";

import { Redirect } from "react-router-dom";

import Cookies from "js-cookie";

import {
  InitialCont,
  MainCont,
  LabelElementFirst,
  InputContent,
  LabelShow,
} from "./styledOne";

import AccessOfAllStateOne from "../../complexOne/AccessOfAllStateOne";

import "./index.css";

class LoginPage extends Component {
  state = {
    usernameInput: "",
    passwordInput: "",
    showPasswordInput: false,
    errorMsg: "",
    showErrorMsg: "",
  };

  onChangeUsername = (event) => {
    this.setState({ usernameInput: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ passwordInput: event.target.value });
  };

  onChangeCheckBox = (event) => {
    this.setState({ showPasswordInput: event.target.checked });
  };

  onClickLoginButton = async () => {
    const { usernameInput, passwordInput } = this.state;
    const url = "https://apis.ccbp.in/login";
    const details = { username: usernameInput, password: passwordInput };

    const options = {
      method: "POST",
      body: JSON.stringify(details),
    };

    const response = await fetch(url, options);

    const jsonOne = await response.json();
    const jwtToken = jsonOne.jwt_token;

    if (jwtToken === undefined) {
      this.setState({ showErrorMsg: true, errorMsg: jsonOne.error_msg });
    } else {
      Cookies.set("jwt_token", jwtToken, { expires: 30 });
      const { history } = this.props;
      history.replace("/");
    }
  };

  render() {
    const {
      usernameInput,
      errorMsg,
      passwordInput,
      showPasswordInput,
      showErrorMsg,
    } = this.state;

    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      return <Redirect to="/" />;
    }
    return (
      <AccessOfAllStateOne.Consumer>
        {(value) => {
          const { isLight } = value;
          return (
            <InitialCont isLight={isLight}>
              <MainCont className="login-main-container" isLight={isLight}>
                <img
                  className="website-logo"
                  src={
                    isLight
                      ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  }
                  alt="website logo"
                />
                <LabelElementFirst isLight={isLight} htmlFor="usernameLabel">
                  USERNAME
                </LabelElementFirst>
                <InputContent
                  isLight={isLight}
                  placeholder="Username"
                  onChange={this.onChangeUsername}
                  id="usernameId"
                  type="text"
                  value={usernameInput}
                />
                <LabelElementFirst isLight={isLight} htmlFor="passwordLabel">
                  PASSWORD
                </LabelElementFirst>
                <InputContent
                  isLight={isLight}
                  placeholder="Password"
                  onChange={this.onChangePassword}
                  type={showPasswordInput ? "text" : "password"}
                  id="passwordId"
                  value={passwordInput}
                />
                <div className="login-main-cont-show-cont">
                  <input
                    className="login-main-cont-show-input"
                    id="showId"
                    type="checkbox"
                    onChange={this.onChangeCheckBox}
                  />
                  <LabelShow
                    isLight={isLight}
                    className="login-main-cont-show-label"
                    htmlFor="showId"
                  >
                    Show Password
                  </LabelShow>
                </div>
                <button
                  onClick={this.onClickLoginButton}
                  className="login-button"
                  type="button"
                >
                  Login
                </button>
                {showErrorMsg && <p className="error-msg">*{errorMsg}</p>}
              </MainCont>
            </InitialCont>
          );
        }}
      </AccessOfAllStateOne.Consumer>
    );
  }
}

export default LoginPage;

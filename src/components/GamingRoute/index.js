import { Component } from "react";

import { FaGamepad } from "react-icons/fa";

import Cookies from "js-cookie";
import Loader from "react-loader-spinner";

import Header from "../Header";

import LeftContainer from "../LeftContainer";

import AccessOfAllStateOne from "../../complexOne/AccessOfAllStateOne";

import GamingPage from "../GamingPage";

import FailureError from "../FailureError";

import {
  TrendingIconCont,
  TrendingContainer,
  TrendingHeading,
} from "../Trending/styledOne";

import MainContainer from "./styledOne";

import "./index.css";

const AlteringOne = {
  loading: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE",
};

class GamingRoute extends Component {
  state = { videos: "", status: AlteringOne.loading };

  componentDidMount() {
    this.getVideos();
  }

  getVideos = async () => {
    this.setState({ status: AlteringOne.loading });
    const jwtToken = Cookies.get("jwt_token");
    const url = "https://apis.ccbp.in/videos/gaming";
    const options = {
      headers: {
        Authorization: `bearer ${jwtToken} `,
      },
    };
    const response = await fetch(url, options);
    const jsonOne = await response.json();
    if (response.ok) {
      this.setState({ videos: jsonOne.videos, status: AlteringOne.success });
    } else {
      this.setState({ status: AlteringOne.failure });
    }
  };

  loader = () => (
    <div data-testid="loader" className="loading-main">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  );

  failure = () => (
    <div>
      <FailureError />
    </div>
  );

  mainContainer = () => {
    const { videos } = this.state;
    return (
      <AccessOfAllStateOne.Consumer>
        {(value) => {
          const { isLight } = value;
          return (
            <>
              <TrendingContainer isLight={isLight}>
                <TrendingIconCont isLight={isLight}>
                  <FaGamepad className="trending-icon" />
                </TrendingIconCont>

                <TrendingHeading isLight={isLight}>Gaming</TrendingHeading>
              </TrendingContainer>
              <MainContainer isLight={isLight}>
                {videos.map((each) => (
                  <GamingPage details={each} key={each.id} />
                ))}
              </MainContainer>
            </>
          );
        }}
      </AccessOfAllStateOne.Consumer>
    );
  };

  main = () => {
    const { status } = this.state;
    switch (status) {
      case AlteringOne.loading:
        return this.loader();

      case AlteringOne.success:
        return this.mainContainer();

      case AlteringOne.failure:
        return this.failure();

      default:
        return this.loader();
    }
  };

  render() {
    return (
      <AccessOfAllStateOne.Consumer>
        {(value) => {
          const { isLight } = value;

          return (
            <>
              <Header />
              <div className="gaming-bottom-cont">
                <LeftContainer />
                <div className="trending-right-top">{this.main()}</div>
              </div>
            </>
          );
        }}
      </AccessOfAllStateOne.Consumer>
    );
  }
}

export default GamingRoute;

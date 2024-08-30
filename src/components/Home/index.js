import { Component } from "react";

import Loader from "react-loader-spinner";

import { IoIosClose, IoMdSearch } from "react-icons/io";

import Cookies from "js-cookie";

import Header from "../Header";

import AccessOfAllStateOne from "../../complexOne/AccessOfAllStateOne";

import VideosPlayer from "../VideoPlayer";

import LeftContainer from "../LeftContainer";

import FailureError from "../FailureError";

import {
  MainContainer,
  SearchEngine,
  MainRightCont,
  SearchIconCont,
  NoSearchHeading,
  NoSearchPara,
} from "./styledOne";

import "./index.css";

const AlteringOne = {
  loading: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE",
};

class Home extends Component {
  state = {
    videos: "",
    showMainOne: true,
    status: AlteringOne.loading,
    searchOne: "",
  };

  componentDidMount() {
    this.getVideos();
  }

  loader = () => (
    <div data-testid="loader" className="loading-main">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  );

  getVideos = async () => {
    this.setState({ status: AlteringOne.loading });
    const { searchOne } = this.state;
    const jwtToken = Cookies.get("jwt_token");

    const url = `https://apis.ccbp.in/videos/all?search=${searchOne}`;

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
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

  failureOne = () => <FailureError />;

  videosContainer = () => {
    const { videos } = this.state;

    if (videos.length === 0) {
      return (
        <AccessOfAllStateOne.Consumer>
          {(value) => {
            const { isLight } = value;
            return (
              <div className="no-search-cont">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                  className="no-search-results-image"
                />
                <NoSearchHeading isLight={isLight}>
                  No Search results found
                </NoSearchHeading>
                <NoSearchPara isLight={isLight}>
                  Try difficult key words or remove search filter
                </NoSearchPara>
                <button type="button" className="retry-button">
                  Retry
                </button>
              </div>
            );
          }}
        </AccessOfAllStateOne.Consumer>
      );
    }

    return (
      <ul className="videos-container">
        {videos.map((each) => (
          <VideosPlayer details={each} key={each.id} />
        ))}
      </ul>
    );
  };

  getTheMainOne = () => {
    const { status } = this.state;

    switch (status) {
      case AlteringOne.loading:
        return this.loader();

      case AlteringOne.success:
        return this.videosContainer();

      case AlteringOne.failure:
        return this.failureOne();

      default:
        return this.loader();
    }
  };

  onClickShowContainer = () => {
    this.setState({ showMainOne: false });
  };

  rightTop = () => (
    <div className="main-right-top-cont">
      <div>
        <img
          className="header-logo-2"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <p className="main-right-top-cont-desc">
          But Nxt Watch Premium prepaid plans with <br /> UPI
        </p>
        <button className="main-right-top-cont-button" type="button">
          GET IT NOW
        </button>
      </div>
      <div>
        <IoIosClose
          onClick={this.onClickShowContainer}
          className="close-bottom"
        />
      </div>
    </div>
  );

  onChangeSearchButton = (event) => {
    this.setState({ searchOne: event.target.value });
  };

  onClickSearchButton = () => {
    this.getVideos();
  };

  render() {
    return (
      <AccessOfAllStateOne.Consumer>
        {(value) => {
          const { isLight } = value;
          const { searchOne, showMainOne } = this.state;

          return (
            <div className="home-initial-cont">
              <Header />
              <MainContainer>
                <LeftContainer />

                <MainRightCont isLight={isLight}>
                  {showMainOne && this.rightTop()}
                  <div className="search-cont">
                    <SearchEngine
                      id="searchEngine"
                      isLight={isLight}
                      type="search"
                      value={searchOne}
                      placeholder="Search"
                      onChange={this.onChangeSearchButton}
                    />
                    <SearchIconCont
                      htmlFor="searchEngine"
                      isLight={isLight}
                      onClick={this.onClickSearchButton}
                    >
                      <IoMdSearch />
                    </SearchIconCont>
                  </div>

                  {this.getTheMainOne()}
                </MainRightCont>
              </MainContainer>
            </div>
          );
        }}
      </AccessOfAllStateOne.Consumer>
    );
  }
}

export default Home;

import { Component } from "react";

import Cookies from "js-cookie";
import Loader from "react-loader-spinner";

import { HiSaveAs } from "react-icons/hi";

import Header from "../Header";

import LeftContainer from "../LeftContainer";
import TrendingPlayerEach from "../TrendingPlayerEach";

import AccessOfAllStateOne from "../../complexOne/AccessOfAllStateOne";

import {
  MainContainer,
  TrendingIconCont,
  TrendingContainer,
  TrendingHeading,
} from "../Trending/styledOne";

import { NoVideosHeading, NoVideosPara } from "./styledOne";

import "./index.css";

class SavedVideos extends Component {
  noSavedVideos = () => (
    <AccessOfAllStateOne.Consumer>
      {(value) => {
        const { isLight } = value;
        return (
          <MainContainer className="saved-right-top" isLight={isLight}>
            <img
              className="no-saved-videos-image"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoVideosHeading isLight={isLight}>
              No saved videos found
            </NoVideosHeading>
            <NoVideosPara isLight={isLight}>
              You can save your videos while watching them
            </NoVideosPara>
          </MainContainer>
        );
      }}
    </AccessOfAllStateOne.Consumer>
  );

  main = () => (
    <AccessOfAllStateOne.Consumer>
      {(value) => {
        const { savedVideos, isLight } = value;

        return (
          <div className="scroll-saved-videos ">
            <TrendingContainer isLight={isLight}>
              <TrendingIconCont isLight={isLight}>
                <HiSaveAs className="trending-icon" />
              </TrendingIconCont>

              <TrendingHeading isLight={isLight}>Saved Videos</TrendingHeading>
            </TrendingContainer>
            <MainContainer isLight={isLight}>
              {savedVideos.map((each) => (
                <TrendingPlayerEach
                  details={each}
                  isAlreadySaved="true"
                  key={each.id}
                />
              ))}
            </MainContainer>
          </div>
        );
      }}
    </AccessOfAllStateOne.Consumer>
  );

  render() {
    return (
      <AccessOfAllStateOne.Consumer>
        {(value) => {
          const { isLight, savedVideos } = value;
          return (
            <>
              <Header />
              <div className="saved-bottom-cont">
                <LeftContainer />
                <div>
                  {savedVideos.length === 0
                    ? this.noSavedVideos()
                    : this.main()}
                </div>
              </div>
            </>
          );
        }}
      </AccessOfAllStateOne.Consumer>
    );
  }
}

export default SavedVideos;

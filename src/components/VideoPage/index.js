import { Component } from "react";

import Cookies from "js-cookie";

import ReactPlayer from "react-player";

import Loader from "react-loader-spinner";

import { formatDistanceToNow } from "date-fns";

import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

import { HiSaveAs } from "react-icons/hi";

import AccessOfAllStateOne from "../../complexOne/AccessOfAllStateOne";

import LeftContainer from "../LeftContainer";

import Header from "../Header";

import {
  MainContainer,
  Title,
  ViewsTimeCont,
  ProfileName,
  Subscribers,
  Description,
  LikeDislikeCont,
} from "./styledOne";

import "./index.css";

const AlteringOne = {
  loading: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE",
};

class VideoPage extends Component {
  state = {
    details: "s",
    ExSavedVideos: [],
    status: AlteringOne.loading,
    isSaved: false,
    like: false,
    disLike: false,
  };

  componentDidMount() {
    this.getVideoDetails();
  }

  loader = () => (
    <div data-testid="loader" className="loading-main video-page-leader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  );

  getVideoDetails = async () => {
    this.setState({ status: AlteringOne.loading });
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const jwtToken = Cookies.get("jwt_token");

    const url = `https://apis.ccbp.in/videos/${id}`;

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    const response = await fetch(url, options);
    const jsonOne = await response.json();
    const videoDetails = jsonOne.video_details;
    this.setState({ details: videoDetails, status: AlteringOne.success });
  };

  videoPlayer = () => {
    const { details } = this.state;
    const updatedOne = {
      channel: details.channel,
      description: details.description,
      id: details.id,
      publishedAt: details.published_at,
      thumbnailUrl: details.thumbnail_url,
      title: details.title,
      videoUrl: details.video_url,
      viewCount: details.view_count,
    };

    const updatedChannel = {
      name: updatedOne.channel.name,
      profileImageUrl: updatedOne.channel.profile_image_url,
      subscriberCount: updatedOne.channel.subscriber_count,
    };

    const timesOfIndia = formatDistanceToNow(
      new Date(updatedOne.publishedAt)
    ).replace("over", "");
    return (
      <AccessOfAllStateOne.Consumer>
        {(value) => {
          const {
            isLight,
            savedVideos,
            onSaveVideos,
            onRemoveSavedVideos,
          } = value;

          const { isSaved, like, disLike } = this.state;

          const isAlreadyThere = savedVideos.filter(
            (each) => each.id === details.id
          );

          const onClickLikeOne = () => {
            if (disLike) {
              this.setState({ disLike: false });
            }
            this.setState((prevState) => ({ like: !prevState.like }));
          };

          const onClickDisLikeOne = () => {
            if (like) {
              this.setState({ like: false });
            }
            this.setState((prevState) => ({ disLike: !prevState.disLike }));
          };

          const customizeButton =
            isAlreadyThere.length >= 1 && "special-class-name";

          const onClickSaveOne = () => {
            if (isAlreadyThere.length >= 1) {
              this.setState({ isSaved: false });
              onRemoveSavedVideos(details);
            } else {
              this.setState((prevState) => ({ isSaved: !prevState.isSaved }));

              if (isSaved) {
                onRemoveSavedVideos(details);
              } else {
                onSaveVideos(details);
              }
            }
          };

          return (
            <MainContainer isLight={isLight}>
              <div>
                <ReactPlayer
                  className="video-page-image"
                  url={updatedOne.videoUrl}
                  controls
                />
                <Title isLight={isLight}>{updatedOne.title}</Title>
                <div className="like-share-cont-main">
                  <ViewsTimeCont>
                    <p>{updatedOne.viewCount} views</p>
                    <p>.</p>
                    <p>{timesOfIndia} ago</p>
                  </ViewsTimeCont>
                  <LikeDislikeCont isLight={isLight} className="checking">
                    <li
                      onClick={onClickLikeOne}
                      className={`${
                        like && "special-class-name"
                      } like-dislike-item-cont`}
                    >
                      <AiOutlineLike className="like-icon" />
                      <p>Like</p>
                    </li>
                    <li
                      onClick={onClickDisLikeOne}
                      className={`${
                        disLike && "special-class-name"
                      } like-dislike-item-cont`}
                    >
                      <AiOutlineDislike className="like-icon" />
                      <p>Dislike</p>
                    </li>
                    <li
                      onClick={onClickSaveOne}
                      className={`${
                        isSaved && "special-class-name"
                      } like-dislike-item-cont ${customizeButton}`}
                    >
                      <HiSaveAs className="like-icon" />
                      <p>Save</p>
                    </li>
                  </LikeDislikeCont>
                </div>
                <div className="divide-line-cont">
                  <hr className="divide-line" />
                </div>
                <div className="video-page-profile-cont">
                  <img
                    className="video-page-profile-image"
                    src={updatedChannel.profileImageUrl}
                    alt={updatedChannel.name}
                  />
                  <div className="video-page-profile-right-cont">
                    <ProfileName isLight={isLight}>
                      {updatedChannel.name}
                    </ProfileName>
                    <Subscribers>
                      {updatedChannel.subscriberCount} Subscribers
                    </Subscribers>
                    <Description isLight={isLight}>
                      {updatedOne.description}
                    </Description>
                  </div>
                </div>
              </div>
            </MainContainer>
          );
        }}
      </AccessOfAllStateOne.Consumer>
    );
  };

  mainContainer = () => {
    const { status } = this.state;
    switch (status) {
      case AlteringOne.loading:
        return this.loader();

      case AlteringOne.success:
        return this.videoPlayer();

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
            <div>
              <Header />
              <div className="video-page-lower-one-cont">
                <LeftContainer />
                {this.mainContainer()}
              </div>
            </div>
          );
        }}
      </AccessOfAllStateOne.Consumer>
    );
  }
}

export default VideoPage;

import { Component } from "react";

import { Link } from "react-router-dom";

import { formatDistanceToNow } from "date-fns";

import AccessOfAllStateOne from "../../complexOne/AccessOfAllStateOne";

import { SubHeading, MainHeading } from "./styledOne";

import "./index.css";

class VideoPlayer extends Component {
  render() {
    const { details } = this.props;
    const updatedOne = {
      channel: details.channel,
      id: details.id,
      publishedAt: details.published_at,
      thumbnailUrl: details.thumbnail_url,
      title: details.title,
      viewCount: details.view_count,
    };

    const channelUpdatedOne = {
      name: updatedOne.channel.name,
      profileImageUrl: updatedOne.channel.profile_image_url,
    };

    return (
      <Link to={`/videos/${updatedOne.id}`} className="link-normal">
        <AccessOfAllStateOne.Consumer>
          {(value) => {
            const { isLight } = value;
            const updatedTime = formatDistanceToNow(
              new Date(updatedOne.publishedAt)
            );

            const newOne = updatedTime.replace("over", "");

            return (
              <li className="video-player-cont">
                <img
                  className="thumbnail-image"
                  src={updatedOne.thumbnailUrl}
                  alt="thumbnail"
                />
                <div className="video-player-content-container">
                  <img
                    className="video-player-profile-logo"
                    src={channelUpdatedOne.profileImageUrl}
                    alt={channelUpdatedOne.name}
                  />
                  <div className="video-player-content-cont-right">
                    <MainHeading isLight={isLight}>
                      {updatedOne.title}
                    </MainHeading>
                    <SubHeading isLight={isLight}>
                      {channelUpdatedOne.name}
                    </SubHeading>
                    <div className="video-player-lower-cont">
                      <SubHeading isLight={isLight}>
                        {updatedOne.viewCount} views {"."}{" "}
                      </SubHeading>

                      <SubHeading isLight={isLight}>{newOne} ago</SubHeading>
                    </div>
                  </div>
                </div>
              </li>
            );
          }}
        </AccessOfAllStateOne.Consumer>
      </Link>
    );
  }
}

export default VideoPlayer;

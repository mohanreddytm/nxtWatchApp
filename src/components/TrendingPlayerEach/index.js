import { Component } from "react";

import { Link } from "react-router-dom";

import { formatDistanceToNow } from "date-fns";

import AccessOfAllStateOne from "../../complexOne/AccessOfAllStateOne";

import { MainContainer, MainHeading, MiniOnes } from "./styledOne";

import "./index.css";

class TrendingPlayerEach extends Component {
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

    const updatedChannel = {
      name: updatedOne.channel.name,
      profileImageUrl: updatedOne.channel.profile_image_url,
    };

    const timesOfIndia = formatDistanceToNow(
      new Date(updatedOne.publishedAt)
    ).replace("over", "");

    return (
      <Link to={`/videos/${updatedOne.id}`} className="link-normal">
        <AccessOfAllStateOne.Consumer>
          {(value) => {
            const { isLight } = value;
            return (
              <MainContainer>
                <img
                  className="trending-image"
                  src={updatedOne.thumbnailUrl}
                  alt="thumbnail"
                />
                <div>
                  <MainHeading isLight={isLight}>
                    {updatedOne.title}
                  </MainHeading>
                  <MiniOnes>{updatedChannel.name}</MiniOnes>
                  <div className="views-time-cont">
                    <MiniOnes>{updatedOne.viewCount} views . </MiniOnes>
                    <MiniOnes> {timesOfIndia} ago</MiniOnes>
                  </div>
                </div>
              </MainContainer>
            );
          }}
        </AccessOfAllStateOne.Consumer>
      </Link>
    );
  }
}

export default TrendingPlayerEach;

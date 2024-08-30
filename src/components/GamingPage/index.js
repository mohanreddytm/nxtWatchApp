import { Link } from "react-router-dom";

import AccessOfAllStateOne from "../../complexOne/AccessOfAllStateOne";

import { MainHeading, MiniOne } from "./styledOne";

import "./index.css";

const GamingPage = (props) => {
  const { details } = props;
  const updatedOne = {
    id: details.id,
    thumbnailUrl: details.thumbnail_url,
    title: details.title,
    viewCount: details.view_count,
  };
  return (
    <Link to={`/videos/${updatedOne.id}`} className="link-normal">
      <AccessOfAllStateOne.Consumer>
        {(value) => {
          const { isLight } = value;
          return (
            <li className="gaming-page-cont">
              <img
                className="gaming-page-image"
                src={updatedOne.thumbnailUrl}
                alt="thumbnail"
              />
              <MainHeading isLight={isLight}>{updatedOne.title}</MainHeading>
              <MiniOne>{updatedOne.viewCount} Watching Worldwide</MiniOne>
            </li>
          );
        }}
      </AccessOfAllStateOne.Consumer>
    </Link>
  );
};

export default GamingPage;

import AccessOfAllStateOne from "../../complexOne/AccessOfAllStateOne";

import { NoSearchHeading, NoSearchPara } from "../Home/styledOne";

import "./index.css";

const FailureError = (props) => (
  <AccessOfAllStateOne.Consumer>
    {(value) => {
      const { isLight } = value;
      const { onClickRetryButton } = props;

      const onClickOne = () => {
        onClickRetryButton();
      };
      return (
        <div className="no-search-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
            alt="failure"
            className="no-search-results-image"
          />
          <NoSearchHeading isLight={isLight}>
            Oops! Something Went Wrong
          </NoSearchHeading>
          <NoSearchPara className="center-the-content" isLight={isLight}>
            We are having some trouble to complete your request. <br />
            Please try again.
          </NoSearchPara>
          <button onClick={onClickOne} type="button" className="retry-button">
            Retry
          </button>
        </div>
      );
    }}
  </AccessOfAllStateOne.Consumer>
);

export default FailureError;

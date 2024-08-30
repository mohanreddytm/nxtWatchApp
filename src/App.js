import { Component } from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";

import LoginPage from "./components/LoginPage";

import ProtectedRoute from "./components/ProtectedRoute";

import AccessOfAllStateOne from "./complexOne/AccessOfAllStateOne";

import VideoPage from "./components/VideoPage";

import Trending from "./components/Trending";

import GamingRoute from "./components/GamingRoute";

import SavedVideos from "./components/SavedVideos";

import "./App.css";

class App extends Component {
  state = { isLight: true, savedVideos: [] };

  onChangeTheme = () => {
    this.setState((prevState) => ({ isLight: !prevState.isLight }));
  };

  onSaveVideos = (x) => {
    this.setState((prevState) => ({
      savedVideos: [...prevState.savedVideos, x],
    }));
  };

  onRemoveSavedVideos = (x) => {
    const { savedVideos } = this.state;
    const updatedVideos = savedVideos.filter((each) => each.id !== x.id);

    this.setState({ savedVideos: [...updatedVideos] });
  };

  render() {
    const { isLight, savedVideos } = this.state;
    console.log("one");
    console.log(savedVideos);
    console.log("two");
    return (
      <AccessOfAllStateOne.Provider
        value={{
          isLight,
          onChangeTheme: this.onChangeTheme,
          onSaveVideos: this.onSaveVideos,
          savedVideos,
          onRemoveSavedVideos: this.onRemoveSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/videos/:id" component={VideoPage} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        </Switch>
      </AccessOfAllStateOne.Provider>
    );
  }
}

export default App;

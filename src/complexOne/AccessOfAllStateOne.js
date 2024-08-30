import react from "react";

const AccessOfAllStateOne = react.createContext({
  isLight: false,
  savedVideos: [],
  onChangeTheme: () => {},
  onSaveVideos: () => {},
  onRemoveSavedVideos: () => {},
});

export default AccessOfAllStateOne;

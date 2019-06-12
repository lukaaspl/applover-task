import React, { createContext } from "react";
import translations from "../helpers/translations";
import storage from "../helpers/storage";
import { setLanguageBasedOnLocation, setLanguageBasedOnBrowserSettings } from "../helpers/defaultLanguage";

export const LanguageContext = createContext();

export class LanguageProvider extends React.Component {
  state = {
    language: "en"
  };

  componentDidMount() {
    if (storage.getLanguage()) return this.setState({ language: storage.getLanguage() });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        setLanguageBasedOnLocation.bind(this),
        setLanguageBasedOnBrowserSettings.bind(this)
      );
    } else setLanguageBasedOnBrowserSettings();
  }

  changeLanguage = language => {
    this.setState({ language });
    storage.saveLanguage(language);
  };

  render() {
    const { language } = this.state;
    const translation = translations[language];

    return (
      <LanguageContext.Provider
        value={{
          language,
          changeLanguage: this.changeLanguage,
          translation
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export const LanguageConsumer = LanguageContext.Consumer;

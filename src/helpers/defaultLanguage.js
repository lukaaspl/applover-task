import axios from "axios";
import storage from "./storage";
import api from "./api";

export const setLanguageBasedOnLocation = async function(position) {
  const coordinates = position.coords;
  const { latitude, longitude } = coordinates;
  const request = `${api.geolocationPath}?key=${
    api.keys.opencagedata
  }&q=${latitude}+${longitude}&no_annotations=1`;

  const response = await axios.get(request);
  const countryCode = response.data.results[0].components.country_code.toLowerCase();

  let languageToSet = "en";

  if (countryCode.includes("pl")) languageToSet = "pl";

  this.setState({ language: languageToSet });
};

export const setLanguageBasedOnBrowserSettings = function() {
  let browserLanguage = navigator.userLanguage || navigator.language;
  browserLanguage = browserLanguage.toLowerCase();

  if (browserLanguage.includes("pl")) browserLanguage = "pl";
  else browserLanguage = "en";

  this.setState({ language: browserLanguage });
};

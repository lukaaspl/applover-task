const storage = {
  saveLanguage: language => localStorage.setItem("language", language),
  getLanguage: () => {
    if ("language" in localStorage) return localStorage.getItem("language");
    return false;
  },

  saveUserLoginPreferences: userLoginPreferences => {
    localStorage.setItem(
      "userLoginPreferences",
      JSON.stringify(userLoginPreferences)
    );
  },
  isUserLogged: () => {
    if ("userLoginPreferences" in localStorage) {
      const userLoginPreferencesJSON = localStorage.getItem(
        "userLoginPreferences"
      );
      const userLoginPreferences = JSON.parse(userLoginPreferencesJSON);

      if (userLoginPreferences.keepUserLogged) return true;
    }

    return false;
  }
};

export default storage;

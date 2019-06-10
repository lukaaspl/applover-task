import React, { Component, createContext } from "react";
import storage from "../helpers/storage";

export const UserContext = createContext();

export class UserProvider extends Component {
  state = {
    isLogged: storage.isUserLogged()
  };

  handleLogin = keepUserLogged => {
    this.setState({ isLogged: true });

    const userLoginPreferences = {
      keepUserLogged
    };

    storage.saveUserLoginPreferences(userLoginPreferences);
  };

  render() {
    return (
      <UserContext.Provider
        value={{ userLogged: this.state.isLogged, userLogin: this.handleLogin }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;

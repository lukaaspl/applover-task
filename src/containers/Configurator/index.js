import React, { Component } from "react";
import { UserConsumer } from "../../contexts/UserContext";
import { Redirect } from "react-router-dom";

class Configurator extends Component {
  render() {
    return (
      <UserConsumer>
        {({ userLogged }) => {
          if (!userLogged) return <Redirect to="/login" />;
          return (
            <div style={{ margin: 20 }}>
              <p>Witaj w konfiguratorze!</p>
              <small>
                Status:
                <strong> {userLogged ? "Zalogowano" : "Niezalogowano"}</strong>
              </small>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default Configurator;

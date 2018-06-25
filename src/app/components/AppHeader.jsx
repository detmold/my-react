import * as React from "react";
import { Button } from 'react-bootstrap';

export const AppHeader = () => {
  return (
    <header className="ui fixed menu">
      <nav className="ui container">
        <a href="" className="header item">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png"
            alt="logo"
          />
          Lista kontaktów
        </a>
        <div className="header item">
          <Button className="ui button">Dodaj</Button>
        </div>
      </nav>
    </header>
  );
};
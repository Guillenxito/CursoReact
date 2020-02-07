import React from "react";

import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    console.log("RESPONSE");
    console.log(this.props.badges);
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.image}
          alt={`${this.props.badge.name}`}
        />

        <div>
          <strong>{this.props.badge.name}</strong>
          {`  (${this.props.badge.gender})`}
          <br />
          <strong>Species: </strong>
          {this.props.badge.species}
          <br />
          <strong>Status: </strong>
          {this.props.badge.status}
        </div>
      </div>
    );
  }
}

export default BadgesList;

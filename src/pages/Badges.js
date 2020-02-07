import React from "react";
import { Link } from "react-router-dom";
//Estilos CSS
import "./styles/Badges.css";

//Multimedia
import confLogo from "../images/badge-header.svg";

//Componentes
import BadgesList from "../components/BadgesList";

class Badges extends React.Component {
  //Badges guardados
  constructor(props) {
    console.log("1.constructor");
    super(props);
    this.state = {
      data: {
        results: []
      }
    };
  }

  fecthCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    this.setState({
      data: data
    });
  };

  componentDidMount() {
    console.log("3.componentDidMount");
    this.fecthCharacters();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("5.componentDidUpdate");
    console.log({ prevProps: prevProps, prevState: prevState });
    console.log({ props: this.props, state: this.state });
  }

  componentWillUnmount() {
    console.log("6.componentWillMount");
    clearTimeout(this.timeoutId);
  }

  render() {
    console.log("2/4.Render");
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="logo" />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data.results} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;

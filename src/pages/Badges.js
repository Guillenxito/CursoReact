import React from "react";
import { Link } from "react-router-dom";
//Estilos CSS
import "./styles/Badges.css";

//Multimedia
import confLogo from "../images/badge-header.svg";

//Componentes
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";

class Badges extends React.Component {
  //Badges guardados
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined
    };
  }

  componentDidMount() {
    console.log("3.componentDidMount");
    this.fetchData();
  }

  fetchData = async () => {
    this.state = {
      loading: true,
      error: null
    };

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

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
    console.log("2.Render");
    if (this.state.loading === true) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

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
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;

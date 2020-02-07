import React from "react";

import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTittle: "",
      twitter: ""
    }
  };

  handleChange = e => {
    const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value;

    this.setState({
      form: nextForm
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTittle={this.state.form.jobTittle}
                email={this.state.form.email}
                avatarUrl="https://ojodepezfotografos.com/wp-content/uploads/2019/03/SESION-DE-FOTOS-PERFIL-PROFESIONAL-13.jpg"
              />
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;

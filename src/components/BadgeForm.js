import React from "react";

class BadgeForm extends React.Component {
  state = {};

  handleClick(e) {
    console.log("Button was clicked");
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form was submited");
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="mail"
              name="email"
              value={this.props.formValues.email}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="">Job tittle</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTittle"
              value={this.props.formValues.JobTittle}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="">Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.Twitter}
            ></input>
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;

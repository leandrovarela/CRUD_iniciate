import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.contact = {
      name: "",
      phone: "",
      email: "",
    };
    this.handleInputChange = this.handleInputChange.bind;
  }
  handleInputChange(e) {
    this.setState({
      nome: e.target.value,
    });
  }

  render() {
    return (
      <section>
        <form class="form_regitration">
          <label>
            Nome:
            <input
              onChange={this.handleInputChange}
              type="text"
              placeholder="Full name"
              description="Field to enter name"
              alt="Field to enter your name"
            ></input>
          </label>
          <label>
            Phone:
            <input
              type="text"
              placeholder="(XX)-XXXXXXXXX"
              description="Field to enter phone"
              alt="Field to enter your phone"
            ></input>
          </label>
          <label>
            Email:
            <input
              type="text"
              placeholder="enteryouremail@go.com"
              description="Field to enter email"
              alt="Field to enter your email"
            ></input>
          </label>
          <button type="submit" alt="submit button">
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export default Form;

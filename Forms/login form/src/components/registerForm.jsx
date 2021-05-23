import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = { data: { username: "", password: "", name: "" }, errors: {} };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(6).label("Password"),
    name: Joi.string().required().label("Username"),
  };

  doSubmit = () => {
    console.log("Submit");
  };
  render() {
    return (
      <div>
        <h3>Register</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          <br />
          {this.renderInput("password", "Password")}
          <br />
          {this.renderInput("name", "Name")}
          <br />
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;

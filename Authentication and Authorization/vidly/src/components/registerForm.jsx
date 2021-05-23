import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = { data: { username: "", password: "", name: "" }, errors: {} };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(6).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithjwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <div>
        <h3>Register</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          <br />
          {this.renderInput("password", "Password", "password")}
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

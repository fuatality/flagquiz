import React, { useContext } from "react";

import {
  BoldLink ,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";

import { AccountContext } from "./accountContext";
import { FormGroup, Label } from "reactstrap";

export class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
      flag : false ,
      isMatched: false,
      isAgreed: false,
    } ;

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    } ) ;
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    const axios = require("axios");
    let full_name = this.state.full_name;
    let email = this.state.email;
    let password = this.state.password;
    let confirmPassword = this.state.confirmPassword;
    
    
    var emails = [];
    axios.get("http://localhost:3000/quiz").then((resp) => {
      const data = resp.data;
      data.forEach((e) => {
        emails.push(e.email);
      } ) ;

      for (let e of emails) {
        if (email === e) {
          this.setState({
            isMatched: true,
          } ) ;
        }
      }
      if (
        this.isAgreed.checked &&
        this.state.isMatched === false &&
        confirmPassword === password &&
        full_name !== "" &&
        email !== "" &&
        password.length >= 6
      )  {
        axios
          .post("http://localhost:3000/quiz", {
            full_name: full_name,
            email: email,
            password: password,
          } )
          .then((resp) => {
            console.log(resp.data);
            alert("Welcome");
            this.setState({
              flag: true,
            } ) ;
          } )
          .catch((error) => {
            console.log(error);
          } ) ;
      } else {
        alert("Your registration is invalid! Also, please checked our Terms & Conditions");
        this.full_name.value = "";
        this.email.value = "";
        this.password.value = "";
        this.confirm_password.value = "";
        this.isAgreed.checked = false;
      }
    } ) ;

    // alert(full_name + "\n" + email + "\n" + password+"\nConfirmPassword: " + confirmPassword);
  } ;

  render() {
    
    return (
      <BoxContainer>
        <FormContainer>
          <Input
            required
            type="text"
            placeholder="Full Name"
            name="full_name"
            onChange={this.handleInputChange}
            ref={(el) => (this.full_name = el)}
          />
          <Input
            required
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            onChange={this.handleInputChange}
            ref={(el) => (this.email = el)}
          />
          <Input
            required
            minLength="6"
            type="password"
            placeholder="Password (min length 6)"
            name="password"
            id="password"
            onChange={this.handleInputChange}
            ref={(el) => (this.password = el)}
          />
          <Input
            required
            minLength="6"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={this.handleInputChange}
            ref={(el) => (this.confirm_password = el)}
          />
        </FormContainer>
        <FormGroup check style={{ marginTop: "15px", fontSize: "0.8em", marginLeft : "-25px"}}>
      <Label check>
        <Input
          type="checkbox"
          style={{ height: "35px" }}
          onChange={this.handleInputChange}
          ref={(el) => (this.isAgreed = el)}
        />
        I agree Terms & Conditions
      </Label>
    </FormGroup>
        
        <SubmitButton type="submit" onClick={(e) => this.mySubmitHandler(e)}>
          Sign Up
        </SubmitButton>
        
        <MutedLink href="#">
          Already have an account?
          <BoldLinkComponent />
        </MutedLink>
      </BoxContainer>
    ) ;
  }
}



function BoldLinkComponent(props) {
  const { switchToSignin } = useContext(AccountContext);
  return (
    <BoldLink href="#" onClick={switchToSignin}>
      Sign In
    </BoldLink>
  ) ;
}
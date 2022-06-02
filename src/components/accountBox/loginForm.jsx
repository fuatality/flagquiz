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



export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      flag : false ,
    } ;
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    } ) ;
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    const axios = require("axios");
    axios
      .get("http://localhost:3000/quiz")
      .then((resp) => {
        const data = resp.data;
        data.forEach((e) => {
          // console.log(`${e.email},${e.password}`);
          //console.log("My mail: " + email)
          //console.log("Data Mail: " + e.email)
          if (email === e.email) {
            if (password === e.password) {
              this.setState( {
                flag : true
              } )
            }
          }
        } ) ;
        if (this.state.flag !== true) {
          alert("Your email or password is invalid!");
          this.email.value = "";
          this.password.value = "";
        }
      } )
      .catch((error) => {
        console.log(error);
      } ) ;
  } ;

  render() {
    
    return (
      <BoxContainer>
        <FormContainer>
          <Input
            required
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.handleInputChange}
            ref={(el) => (this.email = el)}
          />
          <Input
            required
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleInputChange}
            ref={(el) => (this.password = el)}
          />
        </FormContainer>
        
        <SubmitButton type="submit" onClick={(e) => this.mySubmitHandler(e)}>
          Sign In
        </SubmitButton>
        
        <MutedLink href="#">
          Don't have an accoun?
          <BoldLinkComponent />
        </MutedLink>
      </BoxContainer>
    ) ;
  }
}

// function Navigator(){
//  return(

// )
// }

function BoldLinkComponent(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoldLink href="#" onClick={switchToSignup}>
      Sign Up
    </BoldLink>
  ) ;
}
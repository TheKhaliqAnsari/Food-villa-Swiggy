import React, { Component } from "react";
import { useOutletContext } from "react-router-dom";
import UserContext from "../utils/UserContext";
class ProfileClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "khaliq ansari",
        location: "London",
        username: "ansarikhaliq",
      },
    };
    // console.log("inside profile constructor")
  }

  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/thekhaliqansari");
    const json = await res.json()
    // console.log(json)
    this.setState({
        userInfo: json,
         
    })
    // console.log("inside profile componet did mount")
  }

  render() {
    // console.log("inside profile Render")
    return (
      <div>
        <h1>Class based component - Profile</h1>
        <h6>Name: {this.state.userInfo.name}</h6>
        <h6>location: {this.state.userInfo.location}</h6>
        <h6>username: {this.state.userInfo.login}</h6>
        <UserContext.Consumer>
          {(value) => <h1>{value.user.name}  - {value.user.email}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default ProfileClass;

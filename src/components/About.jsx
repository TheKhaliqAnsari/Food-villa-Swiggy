import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import { Component, useSyncExternalStore } from "react";

class About extends Component{
    constructor(props){
        super(props)
        console.log("inside the about constructor")
    }
    componentDidMount(){
        console.log("about component did mount")
    }
    
    render(){
        console.log("inside the about render")
       return(
        <div>
            <h1>About Us page</h1>
            <ProfileClass />
        </div>
       )
    }
}

export default About;
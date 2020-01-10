import React, { Component } from "react";
import Header from "./HeaderComponent";

class Main extends Component {

    componentDidMount() {
        console.log('componentDidMount...');

    }


    render() {

        return (
         
                
                <Header />
              
        
        );
    }
}

export default Main;
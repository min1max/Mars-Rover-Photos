import React, { Component } from "react";
import { Navbar, NavbarBrand, Collapse, Label, Button, Form, FormGroup, Input, FormText } from 'reactstrap';


    class Header extends Component {

        constructor(props) {
            super(props);
    
            this.state = {
                isNavOpen: true,
                rotate: false
            };
            this.toggleNav = this.toggleNav.bind(this);
        }
    
        toggleNav() {
            this.setState({
                isNavOpen: !this.state.isNavOpen,
                rotate: !this.state.rotate
            });
            
        }
    
    
      
    
        render() {
            const { rotate, toggle } = this.state;
            return (
                <>
                    <Navbar light>
                        <div className="container">
                            <NavbarBrand className="mr-auto" href="/">Space Mission Images </NavbarBrand>

                        </div>
                    </Navbar>

                    

                    <Button onClick={this.toggleNav} className={rotate ? "rotate" : ""}><span className="fa fa-chevron-up fa-lg"></span></Button>


                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <p>Test</p>

                        <Form>
   
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
     
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
          </Label>
        </FormGroup>
      </FormGroup>
   
      <Button>Search</Button>
    </Form>
                               
                    </Collapse>
                   
                </>
            );
        }
    }
    
    export default Header;    
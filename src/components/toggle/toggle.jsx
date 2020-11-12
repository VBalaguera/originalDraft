import React, { Component } from 'react';
import {  ReactComponent as Logo } from '../../assets/4.3 crown.svg'; 

import OverlayMenu from '../overlay-menu/overlay-menu.component'; 

export default class Toggle extends Component {

    state = {
        on: false
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    render() {
        return (
            <div>
            {this.state.on && 
                <OverlayMenu></OverlayMenu>
            }
                <Logo onClick={this.toggle}>Show/Hide</Logo>
            </div>
        ); 
    }
};



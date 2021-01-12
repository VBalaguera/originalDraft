import React from 'react';

import { FooterContainer } from './footer.styles'; 

class Footer extends React.Component {
    constructor(props) {
        super(props);
        let fecha = new Date()
        this.state = {
            time: new Date().toLocaleTimeString(),
            day: fecha.getDay(),
            month: fecha.getMonth(),
            date: fecha.getDate(),
            year: fecha.getFullYear()
        };
    }
    componentDidMount() {
        this.intervalId = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }
    render(){
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return(
            <FooterContainer>
                <p className='footer-copyright-n-clock'>
                This is the footer. 2020. 
                Today is {days[this.state.day]}, {months[this.state.month]} {this.state.date}, {this.state.year}. 
                The time is {this.state.time}.</p>
            </FooterContainer>
        )
    }
}

export default Footer; 

//sources: https://openclassrooms.com/en/courses/4286486-build-web-apps-with-reactjs/4286711-build-a-ticking-clock-component
// https://medium.com/@dpark/time-date-in-react-using-setinterval-54ece428e0cf


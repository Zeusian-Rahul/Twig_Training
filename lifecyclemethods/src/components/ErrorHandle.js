import React, { Component } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';

export default class ErrorHandle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error) {
        console.log('Error:-', error);
        return {
            hasError: true,
        };
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }

    render() {
        <GlobalStyle />;
        if (this.state.hasError) {
            return <div> ErrorHandle has been handled </div>;
        } else {
            return null;
        }
    }
}

import React, { Component } from 'react';
// import "./App.css";
import { GlobalStyle, Wrapper } from './styles/GlobalStyle';
// import Throw from "./components/Throw";
// import ErrorHandle from "./components/ErrorHandle";
// import styled from "styled-components";
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 1,
            check: 0,
            description: {},
        };
        console.log('constructor called');
        this.increment = this.increment.bind(this);
    }

    add = () => {
        this.setState({ count: this.state.count + 1 });
    };

    subtract = () => {
        this.setState({ count: this.state.count - 1 });
    };

    increment(id) {
        console.log('fetching....');
        fetch(`https://swapi.dev/api/people/${id}`)
            .then((res) => res.json())
            .then((data) => this.setState(() => ({ description: data })));
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Updating', this.state.count);
        if (this.state.count !== prevState.count) {
            this.increment(this.state.count);
            console.log('Updated', this.state.count, prevState.count);
        }
    }

    componentDidMount() {
        console.log('Mounted');
        this.increment(this.state.count);
    }

    componentWillUnmount() {
        console.log('Unmounted');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldUpdate', this.state.count, nextState.count);

        //condition true then render and then after render  componentwillupdated called

        if (nextState.count > 3 && nextState.count < 5) return false;
        return true;
    }

    static getDerivedStateFromProps(props, state) {
    //will run all the time(firstly) and mainly used for update from state or props

        console.log('getDerivedStateFromProps');
        return {
            check: state.count * 10,
        };
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapShotbeforeUpdate', prevState.check);
        return {
            check: prevState.check / 10,
        };
    }

    render() {
        console.log('render');

        return (
            <React.Fragment>
                <GlobalStyle />
                <Wrapper className="counter">
                    <h2>
                        <a href="https://www.w3schools.com">Reach W3</a>
                    </h2>
                    {this.state.count > 1 && (
                        <button className="counter--minus" onClick={this.subtract}>
              –
                        </button>
                    )}
                    <div className="counter--count">
                        <h1>{this.state.count}</h1>
                    </div>
                    <div className="counter--count">
                        <h1>{this.state.check}</h1>
                    </div>
                    <button className="counter--plus" onClick={this.add}>
            +
                    </button>
                </Wrapper>
                {/* <ErrorHandle>
                <Throw />
               </ErrorHandle> */}
                <h1>{this.state.description.name || 'Loading...'}</h1>
            </React.Fragment>
        );
    }
}

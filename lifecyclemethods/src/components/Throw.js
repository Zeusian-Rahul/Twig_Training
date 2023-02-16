import React, { Component } from 'react';

export default class Throw extends Component {
    render() {
        throw new Error('Not found and throwing it');
     
    }
}

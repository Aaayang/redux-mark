import React, { Component } from 'react';
import store from '../store';

import { add, minus } from '../actions'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 0
        };
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                age: store.getState().age
            });
        });
    }
    render() {
        return (
            <div>
                <p>{this.state.age}</p>
                {/* componentDidMount 的时候我们已经订阅了目的（这里的目的是更新age） */}
                {/* 所以这个 dispatch 的时候会触发上面的 subscribe */}
                <button onClick={() => store.dispatch(add())}>add</button>
                <button onClick={() => store.dispatch(minus())}>minus</button>
            </div>
        );
    }
}
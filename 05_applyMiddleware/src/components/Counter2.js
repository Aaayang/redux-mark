import React, { Component } from 'react';
import store from '../store';
import { bindActionCreators } from '../redux';
// actionCreatorObj 是一个创建 action 的函数对象
import actionCreatorObj from '../actions'

let { add2, minus2 } = bindActionCreators(actionCreatorObj, store.dispatch);

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
                age: store.getState().counter2Data.age
            });
        });
    }
    render() {
        return (
            <div>
                <p>{this.state.age}</p>
                <button onClick={e => add2(e, 3)}>add</button>
                <button onClick={e => minus2(e, 2)}>minus</button>
            </div>
        );
    }
}
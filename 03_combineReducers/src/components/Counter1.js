import React, { Component } from 'react';
import store from '../store';
import { bindActionCreators} from '../redux';
// actionCreatorObj 是一个创建 action 的函数对象
import actionCreatorObj from '../actions'

let {add1,minus1} = bindActionCreators(actionCreatorObj, store.dispatch);

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
                age: store.getState().counter1Data.age
            });
        });
    }
    render() {
        return (
            <div>
                <p>{this.state.age}</p>
                <button onClick={e => add1(e, 3)}>add</button>
                <button onClick={e => minus1(e, 2)}>minus</button>
            </div>
        );
    }
}
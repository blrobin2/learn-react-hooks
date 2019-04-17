import React, { Component } from 'react'

interface CounterState {
    count: number;
    time: Date;
}

export default class Counter extends Component<{}, CounterState> {
    public state: CounterState = {
        count: 0,
        time: new Date(),
    };

    private handleClick = (): void  => {
        this.setState((prevState: CounterState): CounterState => ({
            count: prevState.count + 1,
            time: new Date()
        }))
    };

    private clicked = (): void => console.log('window clicked');

    public componentDidMount(): void {
        console.log('componant did mount');
        window.addEventListener('click', this.clicked);
    }

    public componentWillUnmount(): void {
        window.removeEventListener('click', this.clicked);
    }

    public componentDidUpdate(): void {
        console.log('component did update')
    }

    public render(): JSX.Element {
        const { count, time } = this.state;
        return (
            <div>
                <h3 className="center">
                Welcome to the Counter of Life
                </h3>
                <button className="center-block" onClick={this.handleClick}>
                    {count}
                </button>
                <p className="center">
                at: {`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}
                </p>
            </div>
        );
    }
}
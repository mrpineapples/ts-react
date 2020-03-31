import React, { Component } from "react";

type Props = {
    title: string;
};

type State = {
    status: string;
};

export class BigClass extends Component<Props, State> {
    render() {
        const { title } = this.props;
        return (
            <div>
                <h1>{title}</h1>
                <h4>I'm in a class component</h4>
            </div>
        );
    }
}

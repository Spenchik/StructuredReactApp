import React, { Component, PureComponent } from "react";

interface ButtonProps {
  onClick: () => void;
  name: string;
  testDate: string;
}

let counter = 0;

export function ButtonComponent({ onClick, name, testDate }: ButtonProps) {
  return <button onClick={onClick}>{counter}</button>;
}

// PureComponent === React.memo
class BtnComponent extends PureComponent<ButtonProps> {
  //life hooks

  private onChange = () => {};

  constructor(props: ButtonProps) {
    super(props);
    this.foo = "foo";
    //foo
  }

  shouldComponentUpdate(newProps) {
    return this.props.name === newProps.name &&
      this.props.onClick === newProps.onClick
      ? false
      : true;
  }

  didComponentMount() {
    const { onClick, name } = this.props;
  }
  // willUnmount

  render() {
    const { onClick, name } = this.props;

    return <button onClick={this.onChange}>{name}</button>;
  }
}

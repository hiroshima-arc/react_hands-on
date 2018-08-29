// @flow

import * as React from 'react';

type Props = {
  name: string;
  enthusiasmLevel: number;
}

type State = {
  currentEnthusiasm: number;
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
  }

  onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);

  onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

  updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({ currentEnthusiasm });
  }

  render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello
          {' '}
          { name + getExclamationMarks(this.state.currentEnthusiasm) }
        </div>
        <button type="button" onClick={this.onDecrement}>-</button>
        <button type="button" onClick={this.onIncrement}>+</button>
      </div>
    );
  }
}

export default Hello;
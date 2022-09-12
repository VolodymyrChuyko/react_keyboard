import { PureComponent } from 'react';

type State = {
  key: string;
};

export class App extends PureComponent<{}, State> {
  state: Readonly<State> = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => this.setState({ key: event.key });

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key ? (
            `The last pressed key is [${key}]`
          ) : (
            'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}

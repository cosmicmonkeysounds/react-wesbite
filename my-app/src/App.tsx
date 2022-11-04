import React from 'react';
import logo from './logo.svg';
import './App.css';

type Args = 
{
    bitch: string
}


export interface Props
{
    name: string;
    bitch?: number;
}

export interface State
{
    date: Date;
}


class MotherFucker extends React.Component<Props, State>
{
    //props: Readonly<Args>;

    constructor (props: Props)
    {
        super (props);
        this.state = {date: new Date()};
    }

    render() : React.ReactNode 
    {
        return <div>What's up, {this.props.name}? {this.props.bitch}, {this.state.date.toLocaleTimeString()}</div>;
    }
    
}

function App()
{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <MotherFucker name = "bitch"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

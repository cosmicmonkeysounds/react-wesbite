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
    timerID?: NodeJS.Timer;

    constructor (props: Props)
    {
        super (props);
        this.state = {date: new Date()};   
    }

    render() : React.ReactNode 
    {
        return <div>What's up, {this.props.name}? {this.props.bitch}, {this.state.date.toLocaleTimeString()}</div>;
    }

    componentDidMount() : void 
    {
        this.timerID = setInterval
        (
            () => this.tick(),
            1000
        );    
    }


    componentWillUnmount() : void 
    {
        clearInterval (this.timerID);
    }

    tick()
    {
        this.setState
        ({
            date: new Date()
        });
    }
    
}

function App()
{
  return (
    <MotherFucker name = "bitch"/>
  );
}

export default App;

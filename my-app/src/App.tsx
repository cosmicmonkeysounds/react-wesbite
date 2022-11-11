import React from 'react';
import logo from './logo.svg';
import "./sass/main.scss";

type Args = 
{
    bitch: string
}


export interface SidebarProps
{
    name: string;
    bitch?: number;
}

export interface SidebarState
{
    date: Date;
}


class Sidebar extends React.Component<SidebarProps, SidebarState>
{
    //props: Readonly<Args>;
    timerID?: NodeJS.Timer;

    constructor (props: SidebarProps)
    {
        super (props);
        //this.state = {date: new Date()};   
    }

    render() : React.ReactNode 
    {
        const numbers = [1, 2, 3, 4];

        const elems = numbers.map 
        (
            (x) => <li><a>{x}</a></li>
        );

        return <ul>{elems}</ul>;
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

export interface EntryProps
{
    projectName: string,
    employerName: string,
    art: string,
    description: string,
    tags: string[],
    socials: SocialProps[]
}

interface SocialProps
{
    url: string,
    icon: string
}

export interface EntryState
{
    isFocused: boolean
}

class Entry extends React.Component<EntryProps, EntryState>
{
    constructor (props: EntryProps)
    {
        super (props);
        this.state = {isFocused: false}
    }
}


function App()
{
  return (
    <section id="sidebar">
        <Sidebar name = "bitch"/>
    </section>
  );
}

export default App;

import React, {Component} from 'react';
import ReactDxButton from './ui/button';
import ReactDxList from './ui/list';
import ReactDxScrollView from './ui/scroll-view';
import {render} from 'react-dom';

class ButtonTemplate extends Component {
  render() {
    return (
        <div><b>I'm a bold button with '{this.props.data.text}' text</b></div>
    );
  }
}

var ButtonTemplate2 = (props) => <div><b>I'm a pure template '{props.data.text}' text</b></div>;

var MyItemTemplate = (props) => <div><i>{props.data.text}</i></div>;
var MyGroupTemplate = (props) => {
  return <div><b>{props.data.key} : {props.data.text}</b></div> 
};


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      buttonText: 'Hello world',
      listItems: [
        { 
          key: '1', 
          text: 'group 1', 
          items: [
            {text: 'a'}, 
            {text: 'a'}
          ]
        }, 
        { 
          key: '2', 
          text: 'group 2', 
          items: [
            {text: 'a'},
            {text: 'a'}
          ] 
        }
      ]
    };
    this.changeButtonText = this.changeButtonText.bind(this); 
  }

  changeButtonText() {
    this.setState({
      buttonText: 'CHANGED!!!'
    });
  }

  hello() {
    alert('Hello world!');
  }

  render() {
    return (
      <div>

        <h1>Hello, World!</h1>

        <ReactDxButton text='Hello world!' onClick={this.hello}>
        </ReactDxButton>

        <ReactDxButton text={this.state.buttonText} onClick={this.changeButtonText}>
          <ButtonTemplate templateFor='content' />
        </ReactDxButton>

        <ReactDxList grouped={true} dataSource={this.state.listItems}>
          <MyItemTemplate templateFor='item' />
          <MyGroupTemplate templateFor='group' />
        </ReactDxList>

        <ReactDxScrollView height="100px">
          <p>
            A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content 
            A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content 
            A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content 
            A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content 
            A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content 
            A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content 
            A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content 
          </p>
          <ReactDxButton text='Hello world!' onClick={this.hello}>
          </ReactDxButton>
          <p>
            A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content 
            A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content 
            A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content 
            A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content 
            A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content 
            A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content 
            A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content A lot of content 
          </p>
        </ReactDxScrollView>

      </div>
    );
  }
}

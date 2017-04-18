import ReactDOM from 'react-dom';
import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

const refName = 'rootElement';

export default class ReactDxWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let root = ReactDOM.findDOMNode(this.refs[refName]);

    if(this.supportTransclude) {
      this.transclude(this.props.children, root);
    }

    let options = Object.assign({}, this.props);
    this.initTemplates(this.props.children, options);
    this.instance = new this.DxWidgetClass(root, options);
  }

  componentDidUpdate(prevProps) {
    this.instance.option(this.props);
  }

  transclude(children, targetDOMElement) {
    if(!children) return ;

    React.Children.forEach(children, (child) => {
      let tmp = document.createElement('div');
      let content = render(child, tmp);
      targetDOMElement.appendChild(tmp.childNodes[0]);
    });
  }

  initTemplates(children, options) {
    if(!children) return;
    options.integrationOptions = options.integrationOptions || {};
    options.integrationOptions.templates = options.integrationOptions.templates || {};

    React.Children.forEach(children, (child) => {
      if(child.props.templateFor) {
        options.integrationOptions.templates[child.props.templateFor] = this.createTemplate(child);
      }
    });
  }

  createTemplate(tmpl) {
    return { 
      render: (data) => {
        let result = $(this.template(tmpl, { data: data.model }));
        data.container.append(result);
        return result;
      }
    };
  }

  template(tmpl, tmplProps) {
    var element = document.createElement('div');
    var tmplWithData = React.cloneElement(tmpl, tmplProps);
    render(tmplWithData, element);
    return element;
  }

  render() {
    return <div ref={refName} />;
  }
}
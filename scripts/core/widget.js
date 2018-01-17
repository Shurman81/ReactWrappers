import ReactDOM from 'react-dom';
import React from 'react';

const refName = 'rootElement';

export default class ReactDxWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let root = ReactDOM.findDOMNode(this.refs[refName]);

    if(this.supportTransclude) {
      this.transclude(this.props.children, root, () => {
        let options = Object.assign({}, this.props);
        this.initTemplates(this.props.children, options);
        this.instance = new this.DxWidgetClass(root, options);
      });
    }
    else {
    let options = Object.assign({}, this.props);
    this.initTemplates(this.props.children, options);
    this.instance = new this.DxWidgetClass(root, options);
  }

  }

  componentDidUpdate(prevProps) {
    this.instance.option(this.props);
  }

  transclude(children, targetDOMElement, done) {
    if(!children) return ;

    React.Children.forEach(children, (child) => {
      let tmp = document.createElement('div');
      ReactDOM.render(<div ref={container => {
        targetDOMElement.appendChild(container.children[0]);
        done();
      }}>{child}</div>, tmp);
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
        let result = this.template(tmpl, { data: data.model });
        data.container.appendChild(result);
        return result;
      }
    };
  }

  template(tmpl, tmplProps) {
    var element = document.createElement('div');
    var tmplWithData = React.cloneElement(tmpl, tmplProps);
    ReactDOM.render(tmplWithData, element);
    return element;
  }

  render() {
    return <div ref={refName} />;
  }
}
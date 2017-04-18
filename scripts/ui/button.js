import ReactDxWidget from '../core/widget';
import DxButton from 'devextreme/ui/button';

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.compact.css";

export default class ReactDxButton extends ReactDxWidget {
  constructor(props) {
    super(props);
    this.DxWidgetClass = DxButton;
  }
}
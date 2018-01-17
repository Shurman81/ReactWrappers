import ReactDxWidget from '../core/widget';
import DxTagBox from 'devextreme/ui/tag_box';

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.compact.css";

export default class ReactDxTabBox extends ReactDxWidget {
  constructor(props) {
    super(props);
    this.DxWidgetClass = DxTagBox;
  }
}
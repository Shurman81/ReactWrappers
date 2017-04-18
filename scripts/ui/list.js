import ReactDxWidget from '../core/widget';
import DxList from 'devextreme/ui/list';

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.compact.css";

export default class ReactDxList extends ReactDxWidget {
  constructor(props) {
    super(props);
    this.DxWidgetClass = DxList;
  }
}
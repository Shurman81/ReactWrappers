import ReactDxWidget from '../core/widget';
import DxScrollView from 'devextreme/ui/scroll_view';

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.compact.css";

export default class ReactDxScrollView extends ReactDxWidget {
  constructor(props) {
    super(props);
    this.supportTransclude = true;
    this.DxWidgetClass = DxScrollView;
  }
}

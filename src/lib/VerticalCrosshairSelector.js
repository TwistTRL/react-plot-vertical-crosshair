import {Component} from "react";
import PropTypes from "prop-types";
import {fromDomXCoord_Linear} from "plot-utils";

class VerticalCrosshairSelector extends Component {
  constructor(props){
    super(props);
    this.lastEvent=null;
  }
  
  render(){
    return null;
  }

  componentDidMount(){
    this.select();
  }

  componentDidUpdate(){
    this.select();
  }

  select(){
    let { hoveringPosition,selectHandler,
          width,minX,maxX} = this.props;
    // old event
    if (hoveringPosition===this.lastEvent) {
      return;
    }
    // new event
    this.lastEvent = hoveringPosition;
    if (!hoveringPosition)
      selectHandler(null);
    else {
      selectHandler(fromDomXCoord_Linear(width,minX,maxX,hoveringPosition.domX));
    }
  }
}

VerticalCrosshairSelector.propTypes = {
  width: PropTypes.number.isRequired,
  minX: PropTypes.number.isRequired,
  maxX: PropTypes.number.isRequired,
  hoveringPosition: PropTypes.object,
  selectHandler: PropTypes.func.isRequired,
}

export default VerticalCrosshairSelector;

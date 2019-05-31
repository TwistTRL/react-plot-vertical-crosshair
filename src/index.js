import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {PlotInteractionProvider,INTERACTION_MODEL_BARE} from "react-plot-interaction-box";
import {HashRouter as Router, Link, Route} from "react-router-dom";
import VerticalCrosshair, {VerticalCrosshairSelector} from "./lib";

// CSS
import "./index.css";

class VerticalCrosshairBundle extends Component {
  constructor(props){
    super(props);
    this.state={width: 100,
                height: 100,
                minX: 0,
                maxX: 100,
                X: null
                };
  }
  
  render() {
    let {width, height, minX, maxX, X} = this.state;
    return (
      <>
        <fieldset>
          <legend>Props</legend>
          <div>
            width
            <input type="range" min={50} max={250} value={width}
                    onChange={(ev)=>this.setState({width: Number.parseInt(ev.target.value)})}/>
            {width}
          </div>
          <div>
            height
            <input type="range" min={50} max={250} value={height}
                    onChange={(ev)=>this.setState({height: Number.parseInt(ev.target.value)})}/>
            {height}
          </div>
          <div>
            minX
            <input type="range" min={-500} max={maxX} value={minX}
                    onChange={(ev)=>this.setState({minX: Number.parseInt(ev.target.value)})}/>
            {minX}
          </div>
          <div>
            maxX
            <input type="range" min={minX} max={500} value={maxX}
                    onChange={(ev)=>this.setState({maxX: Number.parseInt(ev.target.value)})}/>
            {maxX}
          </div>
          <div>
            X
            <button onClick={()=>this.setState({X: X===null?0:null })}> toogle null</button>
            {X===null? null:
            <input type="range" min={minX-100} max={maxX+100} value={X}
                    onChange={(ev)=>this.setState({X: Number.parseInt(ev.target.value)})}/>
            }
            {X}
          </div>
        </fieldset>
        
        <fieldset>
          <legend>Result</legend>
          <div style={{position:"relative",width:width,height:height}}>
            <div style={{ position:"absolute",
                          backgroundImage:"linear-gradient(to bottom right, rgba(0,0,0,0), lightblue)",
                          width:width,height:height
                          }}>
            </div>
            <div style={{ position:"absolute",
                          backgroundImage:"linear-gradient(to bottom right, pink, rgba(0,0,0,0))",
                          width:width,height:height
                          }}>
            </div>
            <VerticalCrosshair  width={width} height={height}
                                minX={minX}
                                maxX={maxX}
                                X={X}
                                />
          </div>
        </fieldset>
      </>
    );
  }
}

class VerticalCrosshairWithPlotInteractionProviderBundle extends Component {
  constructor(props) {
    super(props);
    this.state = {crosshairX:null};
  }
  
  render() {
    let {crosshairX} = this.state;
    let width = 400;
    let height = 400; 
    let minX = 0;
    let maxX = 400;
    
    return (
      <div style={{position:"relative",width:width,height:height}}>
        <div style={{ position:"absolute",
                      backgroundImage:"linear-gradient(to bottom right, rgba(0,0,0,0), lightblue)",
                      width:width,height:height
                      }}>
        </div>
        <div style={{ position:"absolute",
                      backgroundImage:"linear-gradient(to bottom right, pink, rgba(0,0,0,0))",
                      width:width,height:height
                      }}>
        </div>
        <div style={{ position:"absolute",
                      width:width,height:height
                      }}>
          <VerticalCrosshair  width={width} height={height}
                              minX={minX}
                              maxX={maxX}
                              X={crosshairX}
                              />
        </div>
        <div style={{ position:"absolute",
                      width:width,height:height
                      }}>
          <PlotInteractionProvider  width={width} height={height}
                                    transitionGraph={INTERACTION_MODEL_BARE}
                                    render={(positions)=>
            <VerticalCrosshairSelector  width={width}
                                        minX={minX}
                                        maxX={maxX}
                                        hoveringPosition={positions.hoveringPosition}
                                        selectHandler={(X)=>{
                                          this.setState({crosshairX:X});
                                        }}
                                        />
                                    }/>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return(
      <Router>
        <nav className="app">
          <Link to="/VerticalCrosshair">VerticalCrosshair</Link>
          <Link to="/VerticalCrosshair_with_PlotInteractionProvider">VerticalCrosshair with PlotInteractionProvider</Link>
        </nav>
        <Route path="/VerticalCrosshair/" component={VerticalCrosshairBundle} />
        <Route path="/VerticalCrosshair_with_PlotInteractionProvider/" component={VerticalCrosshairWithPlotInteractionProviderBundle} />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

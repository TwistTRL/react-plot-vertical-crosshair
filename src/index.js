import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {VerticalCrosshair} from "./lib";

class App extends Component {
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
            <button onClick={()=>this.setState({X:null})}>null</button>
            <input type="range" min={minX-100} max={maxX+100} value={X}
                    onChange={(ev)=>this.setState({X: Number.parseInt(ev.target.value)})}/>
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

ReactDOM.render(<App />, document.getElementById('root'));

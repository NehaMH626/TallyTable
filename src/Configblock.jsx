import "./App.css";
import React from "react";
import "./Block.css";
import DisplayBlock from "./Displayblock";

class ConfigBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowCount: 0,
      colCount: 0,
      rows: [],
      cols: [],
      selectedElement: "",
    };
  }
  clearInput = () => {
    this.setState({
      rowCount: 0,
      colCount: 0,
      rows: [],
      cols: [],
    });
  };
  setRow = (e) => {
    this.setState({ rowCount: e.target.value });
  };
  setCol = (e) => {
    this.setState({ colCount: e.target.value });
  };

  generateTable = () => {
    let rowArr = [];
    rowArr.length = this.state.rowCount;
    rowArr.fill(1);
    console.log("row", rowArr);
    this.setState({ rows: rowArr });
    let colArr = [];
    colArr.length = this.state.colCount;
    colArr.fill(1);
    console.log("col", colArr);
    this.setState({ cols: colArr });
    this.setState({ selectedElement: "" });
  };
  getSelectedVal = (data) => {
    this.setState({ selectedElement: data });
  };
  render() {
    console.log("ele", this.state.selectedElement);
    return (
      <div className="row">
        <div className="col-md-9 col-sm-9">
          <DisplayBlock
            rowCount={this.state.rowCount}
            colCount={this.state.colCount}
            getRow={this.state.rows}
            getCol={this.state.cols}
            onSelectedVal={this.getSelectedVal}
          />
        </div>
        <div className="col-md-3 col-sm-3">
          <h4>Block Config</h4>

          <div>
            <label>Row:</label>
            <br />
            <input
              type="number"
              value={this.state.rowCount}
              onChange={(e) => this.setState({ rowCount: e.target.value })}
            />
          </div>
          <div>
            <label>Column:</label>
            <br />
            <input
              type="number"
              value={this.state.colCount}
              onChange={(e) => this.setState({ colCount: e.target.value })}
            />
          </div>
          <button
            className="btn btn-primary customizeBtn"
            onClick={() => this.generateTable()}
          >
            Generate
          </button>
          <button
            className="btn btn-primary customizeBtn"
            onClick={() => this.clearInput()}
          >
            Clear
          </button>

          <div className="selected-container">
            <h4>Selected Block</h4>
            {this.state.selectedElement === "" ? (
              <p>Nothing to show</p>
            ) : (
              <p className="selectedVal-p">{this.state.selectedElement}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ConfigBlock;

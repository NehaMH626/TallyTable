import "./App.css";
import React from "react";
import "./Block.css";

class DisplayBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVal: "",
    };
  }
  getVal = (data) => {
    this.setState({ selectedVal: data });
    console.log("selected val", data);
    this.props.onSelectedVal(data);
  };
  render() {
    console.log("props", this.props.getRow, this.props.getCol);
    return (
      <div className="display-container">
        <h4>Block Display</h4>
        <table className="table table-container">
          <tbody>
            {this.props.getRow.length ? (
              this.props.getRow.map((data, rowIndex) => {
                return (
                  <tr key={rowIndex}>
                    {this.props.getCol.map((item, colIndex) => {
                      return (
                        <td
                          onClick={() =>
                            this.getVal(
                              rowIndex * this.props.colCount + colIndex + 1
                            )
                          }
                        >
                          <div className="tableData">
                            {rowIndex * this.props.colCount + colIndex + 1}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            ) : (
              <p>
                Nothing to show, enter row and column and click{" "}
                <span className="span-bold">Generate</span>
              </p>
            )}
          </tbody>
        </table>
        <div className="block-footer">
          <h4>Total Block : {this.props.rowCount * this.props.colCount}</h4>
        </div>
      </div>
    );
  }
}

export default DisplayBlock;

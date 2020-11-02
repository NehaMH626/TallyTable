import logo from "./logo.svg";
import "./App.css";
import "./Block.css";
import React from "react";
import DisplayBlock from "./Displayblock";
import ConfigBlock from "./Configblock";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="panel panel-default container">
          <ConfigBlock />
        </div>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
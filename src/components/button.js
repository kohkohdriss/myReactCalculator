// import React, { Component } from "react";
// class Button extends Component {
//   render() {
//     return (
//       <div className={`column-${this.props.cols}`}>
//         <button
//           className="calc-button"
//           onClick={() => this.props.action(this.props.symbol)}
//         >
//           {this.props.symbol}
//         </button>
//       </div>
//     );
//   }
// }

// export default Button;

import React from "react";

const Button = ({ cols, symbol, action }) => {
  return (
    <div className={`column-${cols}`}>
      <button className="calc-button" onClick={() => action(symbol)}>
        {symbol}
      </button>
    </div>
  );
};

export default Button;

"use strict";

class Paragraph extends React.Component {
  render() {
    let pStyle = {
      color: "white",
    };
    return (
      <div className=".credit">
        <p style={pStyle}>
          {" "}
          copyright &copy;<span> 2022</span> Abode. all rights reserverd
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Paragraph />
  </div>,
  document.querySelector(".credit")
);

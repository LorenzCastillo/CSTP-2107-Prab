import React from "react";

class App extends React.Component {
  // eslint-disable-next-line constructor-super
  constructor(props) {
    console.log("Called in constructor");
    super(props);
    this.state = ({
      studentName: "Lorenz Castillo",
      collegeName: "VCC",
      address: "Vancouver"
    })
    
  }
  // MOUNTING PHASE
    // Construtor
    // Render
    // componentDidMount

  // THis gets called after you update something, so if
  // it return strue, render and componentdidupdate will be called
  // if you return false, neither render nor componentupdatedidupdate will
  shouldComponentUpdate() {
    console.log("Called in Should Component Update");
    return true;
  }

  // This gets called after Render
  componentDidMount() {
    console.log("Called in Component Did Mount")
  }

  handleNameChange() {
    this.setState({
      studentName: "Daniel",
      collegeName: "VCC",
      address: "Vancouver"
    })
  }

  componentDidUpdate() {
    console.log("Called in Component Did Update")
  }

  // Unmount Phase
  componentWillUnmount() {
    console.log("Called in Component Will Unmount")
  }

  render() {
    console.log("Called in render");
    return (
      <>
        <div>
          <ul>
            Student Information
            <li>
              {this.state.studentName}
            </li>
            <li>
              {this.state.collegeName}
            </li>
            <li>
              {this.state.address}
            </li>
          </ul>

          <button onClick={() => {this.handleNameChange()}}>Update Name</button>
        </div>
      </>
    )
  }
}

export default App;
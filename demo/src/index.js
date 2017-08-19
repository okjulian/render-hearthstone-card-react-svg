import React, { Component } from "react";
import { render } from "react-dom";

import {
  StepZero,
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  StepFive,
  StepSix
} from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <StepZero />
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
        <StepFive />
        <StepSix />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));

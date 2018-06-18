import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js';
import Box from './box';
import ErrorBoundary from './errorBoundary';
import ErrorComp from './errorComp';
import SelectBox from './selectBox';
import WrapBox from './wrapBox';

import { DatePicker, Radio } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class PickerSizesDemo extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br /><br />
        <DatePicker size={size} />
        <br />
        <MonthPicker size={size} placeholder="Select Month" />
        <br />
        <RangePicker size={size} />
        <br />
        <WeekPicker size={size} placeholder="Select Week" />
      </div>
    );
  }
};

const render = function render() {
    ReactDOM.render(
        <div>
            <WrapBox />
            <div>hello anu!</div>
            <SelectBox />
            <Box />
            <ErrorBoundary>
                <ErrorComp />
            </ErrorBoundary>
            <PickerSizesDemo />
        </div>,
        document.getElementById('root'),
    );
};

render();

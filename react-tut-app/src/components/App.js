import React from 'react';

import appData from '../api/appApi';
import SearchBar from './SearchBar';
import Table from './Table';
import '../styles/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: appData,
      input: '',
      checkbox: false,
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const data = appData;
    const { input } = this.state;
    let updatedData = [];

    if (!input) {
      this.setState({ data: appData, checkbox: false });
      return;
    };

    data.map(item => {
      if (input.toUpperCase() === item.name.toUpperCase()) {
        updatedData = [...updatedData, item];
      }
      return false;
    });
    
    this.setState({ data: updatedData, checkbox: false });
  }

  handleInput(e) {
    this.setState({ input: e.target.value });
  }

  handleCheckbox(e) {
    this.setState({ checkbox: e.target.checked });
    const data = appData;
    const { checkbox } = this.state;

    if (checkbox) {
      this.setState({ data: data });
      return;
    }

    let updatedData = [];

    data.map(item => {
      if (item.stocked) {
        updatedData = [...updatedData, item];
      }
      return false;
    });

    this.setState({ data: updatedData });
  }

  render() {
    const { data } = this.state;
    const searchProps = {
      onSubmitForm: this.handleSubmit,
      onChangeInput: this.handleInput,
      onChangeCheckbox: this.handleCheckbox,
      inputVal: this.state.input,
      checkboxVal: this.state.checkbox,
    }

    return (
      <div className="container">
        <SearchBar searchProps={searchProps} />
        <Table data={data} />
      </div>
    );
  }
}

export default App;

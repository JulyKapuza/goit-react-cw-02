import React from 'react';
import './Dropdown.css';

class Dropdown extends React.Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {this.state.visible ? 'Hide' : 'Show'}
        </button>

        {visible && <div className="Dropdown__menu">Showing list</div>}
      </div>
    );
  }
}

export default Dropdown;

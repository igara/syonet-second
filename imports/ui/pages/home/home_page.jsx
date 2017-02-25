import React, {Component, PropTypes} from "react";

export default class HomePage extends Component {
  render() {
    const {items = []} = this.props;
    return (
<div>Homeページです</div>
    );
  }
}

HomePage.propTypes = {
  items: PropTypes.array
};
